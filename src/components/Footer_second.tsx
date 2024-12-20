// components/Footer.tsx
import React from 'react';
import { Button } from './ui/button';

const Footer_second = () => {
  return (
    <footer className="bg-teal-950 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* OUR SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hiring</h3>
            <ul className="space-y-2 text-medium">
              {[
                'M.E.R.N. (Mongo DB, Express JS, React framework, Node JS) Stack Developer.',
                'UI/UX – Figma, Wireframing, User Journey, Design Guidelines, Style guides, Design validation.',
                'API Development, SQL, Python.'
              ].map((service) => (
                <li key={service}>&#x2022; {service}</li>
              ))}
            </ul>
          </div>

          {/* OUR PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CAREER</h3>
            <ul className="space-y-2">              
              <p className='text-justify text-medium'>Exciting News!!! We Are hiring interns and looking for talented individuals to join Thinkers Corporation Pvt Ltd.</p>
              <Button variant="destructive" className='rounded-md'>Know More...</Button>
            </ul>
          </div>

          {/* Journey*/}
          <div>
            <h3 className="text-lg font-semibold mb-4">JOIN THE JOURNEY</h3>
            <ul className="space-y-2 text-justify text-medium">
              
              <p>If you are a tech-savvy, creative, and passionate software enthusiast, we invite you to embark on an exciting startup adventure with us. Embrace the opportunity to learn, grow, and make a real impact in the world of technology.</p>
            </ul>
          </div>

          {/* To apply*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-justify">TO APPLY</h3>
            <p className='text-medium'>Please send your updated resume along with cover letter to:
amit.kushwaha@thinkerrs.com
fareen.sheikh@thinkerrs.com
siddh@thinkerrs.com</p>
            <Button variant="destructive" className='rounded-md'>Mail Us</Button>
          </div>
        </div>
      </div>
      <div className='mt-[3rem] text-center text-medium'>
        <p>
        We look forward to welcoming you to the Thinkers Corporation family!
        </p>
      </div>
    </footer>
  );
};

export default Footer_second;
