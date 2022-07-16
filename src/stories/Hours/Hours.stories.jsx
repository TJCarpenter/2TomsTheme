import React from 'react';

import { Hours } from './Hours';

export default {
  title: 'Example/Hours',
  component: Hours,
  argTypes: {
    style: {
      control: { type: "radio" },
      options: ["default", "hours"]
    },
    normalHours: {
      control: { type: "object" }
    },
    sundayLast: {
      control: { type: "boolean" }
    },
    abreviated: {
      control: { type: "boolean" }
    },
    showHolidays: {
      control: { type: "boolean" }
    },
    title: {
      control: { type: "text" }
    }
  },
};

const Template = (args) => <Hours {...args} />;

export const Default = Template.bind({});
Default.args = { normalHours: ["12:00 - 4:00", "Closed", "Closed", "12:00 - 6:00", "12:00 - 8:00", "12:00 - 8:00", "12:00 - 8:00"], sundayLast: true, abreviated: true, title: "Fort Wayne Brewery", showHolidays: true };



