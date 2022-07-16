import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AlertCircle } from 'react-feather';

import Holidays from 'date-holidays';
const holidays = new Holidays()
holidays.init('US')

export const Hours = ({ normalHours, sundayLast, abreviated, title, showHolidays, ...props }) => {


  const [hasHoliday, setHasHoliday] = useState(false);
  const today = useMemo(() => new Date(), [])

  /**
   * Finds the week start and returns an array week days in date form. Week start can be either sunday or monday.
   * @returns Array (Date)
   */
  const getWeek = useCallback(() => {
    let weekStart = new Date(today.valueOf());
    let dayOfWeek = weekStart.getDay();
    let shift = weekStart.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : (sundayLast | 0 ? 1 : 0));
    var monday = new Date(weekStart.setDate(shift))

    return Array.from({ length: 7 }, (_, i) => {
      let date = new Date(today.valueOf())
      date.setDate(monday.getDate() + i)
      return date
    });
  }, [sundayLast, today])

  /**
   * Checks if the current week contains a holiday. Returns true if a holiday exists in the week.
   * @returns Boolean
   */
  const weekHasHoliday = useCallback(() => {
    return getWeek().map((day) => {
      return Boolean(holidays.isHoliday(day))
    }).includes(true)
  }, [getWeek])

  /**
   * Associates a holiday to a given hour of the week.
   * @returns Array
   */
  const associateHolidays = () => {

    let week = getWeek();
    return week.map((day, index) => {

      let dayIndex = index
      if (index === week.length - 1 && sundayLast | 0) {
        index = -1
        dayIndex = -1
      }

      return { day: dayIndex + sundayLast | 0, holiday: showHolidays && holidays.isHoliday(day)[0], hours: normalHours[index + sundayLast | 0] };
    })
  }

  /**
   * Combines back to back days with the same hours
   * @returns Array
   */
  const combineDays = () => {
    let result = [];

    associateHolidays().forEach((day) => {
      let index = result.findIndex(({ hours }) => (hours === day["hours"]) && !Boolean(day["holiday"]));

      if (index > -1 && !result[index]["holiday"]) {

        let isNextDay = result[index]['days'].map((item) => {
          let nextDay = item["day"] + 1

          if (nextDay === 7) {
            nextDay = 0
          }

          return nextDay !== day["day"]
        }).includes(false)

        if (isNextDay) {
          result[index]['days'].push({ day: day["day"], holiday: day["holiday"] })
        } else {
          result.push({ hours: day['hours'], days: [{ day: day["day"], holiday: day["holiday"] }], holiday: Boolean(day["holiday"]) })
        }
      } else {
        result.push({ hours: day['hours'], days: [{ day: day["day"], holiday: day["holiday"] }], holiday: Boolean(day["holiday"]) })
      }
    });

    return result
  }

  /**
   * Returns a string representaion of the days of the week
   * @param {Number} day Day of the week. 0:Sunday - 6:Saturday
   * @returns String
   */
  const getDayString = (day) => {
    const weekdayFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekdayAbrev = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    if (abreviated) {
      return weekdayAbrev[day];
    }
    return weekdayFull[day];
  }

  /**
   * Takes the hours component and renders them in rows. Highlights the current day and displays holidays.
   * @returns JSX
   */
  const renderHours = () => {

    var combinedDays = combineDays()

    return combinedDays.map((item, index) => {

      let hours = item["hours"]
      let days = item["days"]

      // Start and End days
      let startDay = getDayString(days.at(0)["day"])
      let endDay;
      if (days.length > 1) {
        endDay = getDayString(days.at(-1)["day"])
      }

      // Holiday
      let isHoliday = item["holiday"]
      let holidayName;
      if (isHoliday) {
        holidayName = item["days"][0]["holiday"]["name"]
        holidayName = holidayName.replace(/\([^()]*\)/g, "")
      }

      let activeClass = false;

      if (days.map(d => d.day).includes(today.getDay())) {
        activeClass = ["rounded-sm", "border-gray-50", "bg-gray-800", "bg-opacity-70", "border"].filter(Boolean).join(" ")
      }


      let hasBottomBorder = true;

      if (index === combinedDays.length - 1) {
        hasBottomBorder = false
      }

      if (index !== combinedDays.length - 1 && combinedDays[index + 1]["days"].map(d => d.day).includes(today.getDay())) {
        hasBottomBorder = false
      }

      let className = ["pl-2", hasBottomBorder && "border-b", activeClass].filter(Boolean).join(" ")
      return (
        <li key={index} className={className}>
          <div className="flex flex-row items-center pb-1 sm:text-base text-xs">
            <div>
              <div>{[startDay, endDay].filter(Boolean).join(" - ")}</div>
              <div className='pl-1'>{hours}</div>
            </div>
            {isHoliday &&
              <>
                <div className='flex-1 flex justify-end pr-2'>
                  <span className="max-w-fit text-xs py-1 px-2 rounded-sm text-gray-50 bg-red-900 flex flex-row items-center content-center">
                    <AlertCircle className='h-3 w-3 mr-1' />
                    <span className=''>
                      {holidayName}
                    </span>
                  </span>
                </div>
              </>
            }
          </div>
        </li>
      )
    })
  }

  const getIsOpen = () => {
    let hours = normalHours[today.getDay()]

    if (hours.toLowerCase() == "closed") {
      return false
    }
  }

  const renderIsOpen = () => {
    getIsOpen()
    var isOpen = false

    return (
      <div className='relative'>
        <div className="absolute">
          <div
            className="border-2 rounded border-[#77c1fc]  text-[#ff1818] flex justify-center items-center p-1 font-extralight"
            style={{ "boxShadow": "inset 0 0 5px #3da7f8, 0 0 7px #3da7f8,0 0 7px #3da7f8, 0 0 5px #3da7f8" }}
          >
            {isOpen && (
              <>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >O</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >P</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >E</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >N</span>
              </>
            )}
            {!isOpen && (
              <>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >C</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >L</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >O</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >S</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >E</span>
                <span
                  className='text-2xl'
                  style={{ "textShadow": "0 0 5px #fdd, 0 0 10px #fdd, 0 0 5px #ff1818" }}
                >D</span>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    setHasHoliday(weekHasHoliday())
  }, [hasHoliday, weekHasHoliday]);

  return (

    <div
      className='max-w-md flex flex-row bg-no-repeat bg-cover bg-center text-gray-50 rounded-sm font-sans'
      style={{ "background-image": "url('/2toms_fw.jpeg')" }}
    >
      <div className='w-2/5 p-4 rounded-sm'>
        {renderIsOpen()}
      </div>
      <div className='w-3/5 p-4 bg-gray-900 bg-opacity-90 rounded-sm'>
        <div className="h-full">
          <div className='pb-3'>
            <h3 className='text-sm lg:text-lg'>{title}</h3>
          </div>
          <div>
            <ul>
              {renderHours()}
            </ul>
          </div>
          <div className='flex w-full justify-end text-xs pt-4'>
            {(hasHoliday && showHolidays) && <div className='flex flex-row items-center'>
              <AlertCircle className='h-3 w-3 mr-1' />
              <span>Times are subject to change.</span>
            </div>}
          </div>
        </div>
      </div>

    </div>
  )
}