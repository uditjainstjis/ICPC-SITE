import React from 'react';
import { Check } from 'lucide-react';

export default function Registration() {
  function Handleregisterclick(){
    window.open('https://forms.gle/yLzb8rNCDyNSfwbj9', '_blank');
  }
  return (
    <div id="registration" className="py-20 bg-gradient-to-r from-yellow-50 to-white bg-[length:25px_25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mt-[-17px] mb-20">Register Now</h2>
        <div className='flex sm:flex-row flex-col'>

          <div className='sm:w-[40vw] md:w-[50vw] w-[90vw]  items-center justify- ml-[4vw]'>
            <h3 className='text-3xl text-blue-400 mt-20'>
              Type of participation:
              On-site
            </h3>
            <p className='mt-10 mb-8 whitespace-pre-line'>This is a not for profit initiative and this is a heavily subsidised cost to cover the logistics of experts, accommodation, food etc.
            </p>
            <p className='mt-10 mb-8 whitespace-pre-line'>(Scholarships available)
            </p>
          </div>


        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-yellow-500 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <p className="text-xl">₹8000</p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {[
     "Access to all bootcamp sessions",
     "1-on-1 mentoring with experts",
     "Exclusive study materials",
     "Certificate of completion",
     "Connect with top coders from India",
     "Accommodation Included",
     "4 meals on all 7 days included",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button onClick={Handleregisterclick} className="w-full bg-yellow-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
              Register Now
            </button>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
}