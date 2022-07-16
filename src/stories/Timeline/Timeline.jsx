import React from 'react';
import { Circle } from 'react-feather';

export const Timeline = (props) => {

  return (
    <div className='max-w-5xl flex flex-col h-max p-4'>
      <article className="relative w-full">
        <span className="absolute bg-gray-200 h-full w-1 left-0 -translate-x-1/2 sm:left-1/2 -z-10 " />

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-red-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <span className='flex flex-row justify-between items-center pb-2'>
                <h1 className='text-lg'>Hello There</h1>
                <h3 className='text-lg text-gray-500'>2020</h3>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero corrupti iste ea, qui aut excepturi alias placeat molestiae, assumenda quod consectetur nihil maxime cum suscipit aperiam sed tenetur exercitationem?
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-orange-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <h1 className='text-xl pb-2'>Hello There</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nesciunt odit ratione laborum facere ab, reprehenderit eius tempora distinctio inventore nulla ex quos quidem asperiores quod vero harum rem est.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-yellow-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <h1 className='text-xl pb-2'>Hello There</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora necessitatibus alias beatae voluptas deleniti aperiam atque dolor maiores dicta laudantium ipsam id harum dolorem, similique fugiat natus perferendis libero.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-green-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <h1 className='text-xl pb-2'>Hello There</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, commodi est mollitia odio porro quibusdam similique totam omnis facilis, debitis praesentium non. Eum reprehenderit velit rerum nisi porro nostrum debitis.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-blue-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <h1 className='text-xl pb-2'>Hello There</h1>
              <p>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquam numquam maiores vitae sapiente repellendus voluptatum. Error suscipit blanditiis nostrum natus, non delectus odio a labore! Et veritatis tempore explicabo?
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-row my-4 sm:-mb-12 last:mb-4 pl-6 sm:pl-0 sm:even:justify-start sm:odd:justify-end">
          <div className="flex flex-row items-center sm:w-2/5">
            <span className='absolute left-0 -translate-x-1/2 sm:left-1/2 w-6 h-6 rounded-full border bg-violet-300' />
            <div className="border border-gray-900 rounded-sm w-full py-2 px-3">
              <h1 className='text-xl pb-2'>Hello There</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, possimus incidunt temporibus neque iste omnis libero! Nobis, recusandae eaque suscipit quibusdam voluptas ratione debitis magni illum sit. Expedita, minus?
              </p>
            </div>
          </div>
        </section>

      </article>
    </div>
  )
}