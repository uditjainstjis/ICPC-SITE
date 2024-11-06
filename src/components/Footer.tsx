import React from 'react';
import { Code2, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">Go For Gold</span>
            </div>
            <p className="text-gray-400">
              Go for Gold: Uniting India’s Top Coders to Conquer the ICPC Stage!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-yellow-500">Schedule</a></li>
              <li><a href="#coaches" className="text-gray-400 hover:text-yellow-500">Coaches</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: prayog.m@nst.rishihood.edu.in</li>
              <li className="text-gray-400">Phone: +91 8097602463</li>
              <li className="text-gray-400">Location: Delhi, NCR</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/nst_edu" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/school/newton-school-of-technology/" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/newtonschooloftechnology/" target='_blank' className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Go For Gold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}