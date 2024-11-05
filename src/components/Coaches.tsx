import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pfp from '../../image.png'

export default function Coaches() {
  const coaches = [
    {
      name: "AmirReza Pourakhavan",
      role: "2x ICPC WF, IGM",
      image: pfp,
      // company: "Ex-Google",
    },
    {
      name: "Shreyan Ray ",
      role: "IOI silver medalist\nICPC WF, IGM",
      image: pfp,

      // company: "Ex-Google",
    },
    {
      name: "⁠Utkarsh Gupta",
      role: "2x ICPC WF, GM",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Himanshu Singh",
      role: " ICPC WF, GM",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "Priyansh Agrawal",
      role: " ICPC WF",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Deepak Gour",
      role: "ICPC WF",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Deepak Gour",
      role: "ICPC WF",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "Gaurish Baliga",
      role: "Master on CF",
      image: pfp,

      //company: "Ex-Amazon",
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div id="coaches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-12 ">Our Expert Coaches</h2>
        <div className="relative">
          <div className="flex items-center md:flex-row  justify-center ">

            
            <div className="flex overflow-auto lg:flex-wrap items-center justify-center gap-8 ">
              {coaches.map((coach, index) => (
                <div key={index}
                  className="bg-white p-6 w-[260px] lg:w-[260px] min-w-80 sm:h-[265px]  md:w-[100px]   rounded-xl shadow-lg transform transition-all duration-300}">

                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{coach.name}</h3>
                  <p className="text-gray-600 text-center text-wrap whitespace-pre-line mb-2">{coach.role}</p>
                  {/* <p className="text-yellow-500 text-center font-medium">{coach.company}</p> */}
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}



// 'scale-105' : 'scale-95 opacity-75'