import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pfp from '../../image.png'
import coach1 from '../../public-files/gaurish.png';
import coach2 from '../../public-files/himanshu.jpeg';
import coach3 from '../../public-files/priyanshu.png';
import coach4 from '../../public-files/utkarsh.png';
import coach5 from '../../public-files/amir.png';
import coach6 from '../../public-files/shreyan.png';
import coach7 from '../../public-files/vivek.jpeg';
import coach8 from '../../public-files/user.png';
import coach9 from '../../public-files/aryan.jpeg'
export default function Coaches() {
  const coaches = [
    {
      name: "AmirReza Pourakhavan",
      role: "2x ICPC World Finalist\nInternational Grand Master\n",
      image: coach5,
      // company: "Ex-Google",
    },
    {
      name: "Shreyan Ray ",
      role: "IOI silver medalist\nICPC World Finalist\nInternational Grand Master",
      image: coach6,

      // company: "Ex-Google",
    },
    {
      name: "Aryan Choudhary",
      role: "2x ICPC World Finalist\nGrand Master on CodeForces",
      image: coach9,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Utkarsh Gupta",
      role: "2x ICPC World Finalist\nGrand Master",
      image: coach4,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Himanshu Singh",
      role: " ICPC World Finalist\nGrandmaster",
      image: coach2,

      //company: "Ex-Amazon",
    },
    {
      name: "Priyansh Agrawal",
      role: " ICPC World Finalist",
      image: coach3,

      //company: "Ex-Amazon",
    },
    {
      name: "Vivek Gupta",
      role: " ICPC World Finalist\nMaster on CodeForces\n7 Star on CodeChef",
      image: coach7,

      //company: "Ex-Amazon",
    },
    {
      name: "⁠Deepak Gour",
      role: "ICPC World Finalist",
      image: pfp,

      //company: "Ex-Amazon",
    },
    {
      name: "Gaurish Baliga",
      role: "Master on CodeForces",
      image: coach1,
      //company: "Ex-Amazon",
    }
  ];


  return (
    <div id="coaches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-12 ">Our Expert Coaches</h2>
        <div className="relative">
          <div className="flex items-center md:flex-row  justify-center">

            
            <div className="flex overflow-auto lg:flex-wrap lg:justify-center gap-8 ">
              {coaches.map((coach, index) => (
                <div key={index}
                  className="bg-white p-6 w-[260px] lg:w-[260px] min-w-80 sm:h-[292px]  md:w-[100px] mb-4   rounded-xl shadow-lg transform transition-all duration-300}">

                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover "
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{coach.name}</h3>
                  <p className="text-gray-600 text-center text-wrap whitespace-pre-line mb-2 leading-normal">{coach.role}</p>
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