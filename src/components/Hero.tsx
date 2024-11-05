import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {

  function Handleclick(){
    window.open('https://discord.gg/WpTxuYXm7d', '_blank');
  }
  function Handleregisterclick(){
    window.open('https://forms.gle/yLzb8rNCDyNSfwbj9', '_blank');
  }




  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-yellow-50 via-yellow-100 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Go For <span className="text-yellow-500">Gold</span> 
            </h1>
            <p className="text-lg text-gray-600 mb-8">   
                The "Go for Gold" Bootcamp aims to cultivate competitive programming skills, offering participants the opportunity to train among India’s top ICPC teams, guided by industry-leading experts. Modelled after renowned ICPC training camps, this event will bring together a diverse group of students from various institutions, all striving to excel in programming competitions and advance toward the international stage.
                <br/>
                <br/>
                <span className='text-lg text-gray-600 mb-8'>
  This program aims to be the first to build a more robust, competitive ecosystem of top programmers from college and industry. We invite every student, mentor, and institution to join hands in this mission. 
                </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={Handleregisterclick} className="group bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition flex items-center">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={Handleclick} className="group bg-blue-500 text-white px-8 py-4 border border-blue-700 rounded-full text-lg font-semibold hover:bg-blue-600 transition flex items-center">
                Discord
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              alt="Coding Competition"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-yellow-500">December 4-11</p>
              <p className="text-gray-600">2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}