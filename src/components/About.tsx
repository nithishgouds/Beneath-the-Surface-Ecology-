import React from 'react';
import { InfoIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <InfoIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Initiative</h2>
          </div>

          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              The Water Usage Monitoring System at IIT Tirupati is a comprehensive initiative to track and analyze water consumption patterns across our campus. This system provides real-time insights into water usage, helping us implement data-driven conservation strategies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Objectives</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Monitor real-time water consumption across campus locations</li>
              <li>Identify usage patterns and potential areas for conservation</li>
              <li>Implement data-driven water management strategies</li>
              <li>Track conservation progress and impact</li>
              <li>Promote sustainable water usage practices</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Contact Us</h4>
              <p className="text-gray-600">
                For any queries about the monitoring system, please contact:<br />
                Email: water.monitoring@iittp.ac.in<br />
                Phone: +91-XXX-XXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;