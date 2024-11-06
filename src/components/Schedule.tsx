import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      date: "December 4",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 5",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 6",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 7",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 8",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 9",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },
    {
      date: "December 10",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description1: "2 hour session",
          description2: "5 hour contest",
          description3: "2 hour discussion",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description1: "1 hour session",
          description2: "5 hour contest",
          description3: "1 hour discussion",
          instructor: "Michael son ",
        },
      ],
    },

  ];

  return (
    <div id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Bootcamp Schedule</h2>
          <p className="text-xl text-gray-600">Three days of intensive training with industry experts</p>
        </div>
        
        <div className="grid gap-8 ">

          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-xl shadow-lg overflow-hidden flex sm:flex-row flex-col">
              <div className="bg-yellow-500 text-white p-4 flex items-center">
                <h3 className="text-xl font-semibold text-center">Day {dayIndex + 1} - {day.date}</h3>
              </div>
              <div className="divide-y divide-gray-100 flex flex-row items-center justify-center md:px-7 lg:px-9">

                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="p-6">
                    <div className="flex flex-wrap gap-6 items-center border border-gray-500 p-3 lg:px-8 ">
                      <div className="flex-1">
                        <div className='text-center font-bold mb-2'>{event.title}</div>
                        {/* <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4" />{event.description1}</p>
                        <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4 " />{event.description2}</p>
                        <p className="text-black mb-4 text-center whitespace-pre-line"><Clock className="h-4 w-4 " />{event.description3}</p> */}
                        <div className="flex flex-wrap flex-col gap-4 text-sm text-black">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-600" />
                            {event.description1}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-600" />
                            {event.description2}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-600" />
                            {event.description3}
                          </div>

                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            Instructor: {event.instructor}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}