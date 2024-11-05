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
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 5",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 6",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 7",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 8",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 9",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "December 10",
      events: [
        {
          time: "1 hour ",
          title: "DIV 1",
          description: "Discussion session",
          instructor: "Sarah Chen",
        },
        {
          time: "2 hour",
          title: "DIV 2",
          description: "Discussion session",
          instructor: "Michael Rodriguez",
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
        
        <div className="grid gap-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-xl shadow-lg overflow-hidden flex sm:flex-row flex-col">
              <div className="bg-yellow-500 text-white p-4 flex items-center">
                <h3 className="text-xl font-semibold text-center">Day {dayIndex + 1} - {day.date}</h3>
              </div>
              <div className="divide-y divide-gray-100 flex flex-row items-center justify-center">

                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="p-6">
                    <div className="flex flex-wrap gap-6 items-center border border-gray-500 p-3 ">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 text-center ">{event.title}</h4>
                        <p className="text-gray-600 mb-4 text-center">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
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