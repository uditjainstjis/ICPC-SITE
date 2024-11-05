import React from 'react';
import { Check } from 'lucide-react';

export default function Registration() {
  return (
    <div id="registration" className="py-20 bg-gradient-to-r from-yellow-50 to-white bg-[length:25px_25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mt-[-17px] mb-20">Register Now</h2>
        <div className='flex sm:flex-row flex-col'>

          <div className='sm:w-[40vw] md:w-[50vw] w-[90vw]  items-center justify- ml-[4vw]'>
            <h3 className='text-3xl text-blue-400 mt-20'>
              Types of participation:
              On-site and Online
            </h3>
            <p className='mt-10 mb-8'>We believe that participation in our Bootcamp should be accessible by all teams wherever they are and that is why we made onsite and online types of participation.
            </p>
          </div>


        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-yellow-500 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <p className="text-xl">$499</p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {[
                "Access to all bootcamp sessions",
                "1-on-1 mentoring with experts",
                "Competition entry ticket",
                "Exclusive study materials",
                "Certificate of completion",
                "Job referral opportunities",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
              Register Now
            </button>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}