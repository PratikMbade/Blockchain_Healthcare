import ProfileAvatar from '@/components/ProfileAvatar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row overflow-y-visible">
        <div className="flex flex-col items-center h-fit md:w-2/4 lg:w-2/4 xl:w-1/3 2xl:w-1/3 justify-center rounded-md bg-[#151515] px-5 m-5 sm:px-2 py-4 sm:mt-5 md:m-2 ">
          <ProfileAvatar />
        </div>

        <div className="bg-[#151515] sm:w-auto md:w-3/4 2xl:w-3/4 m-5 sm:mt-5 md:m-2 rounded-md">
          {/* Current Activity */}
          <div className="order-2 lg:order-1">
            <div className="w-full bg-zinc-800 py-4 rounded-md text-2xl px-2">
              Current Activity
            </div>

            <div className="flex flex-col gap-y-3 m-4">
              <p>Upcoming Appointments:</p>
              <ul className="list-disc list-inside">
                <li>Annual physical exam - April 25, 2024, at 10:00 AM</li>
               
              </ul>

              <p>Medication Reminders:</p>
              <ul className="list-disc list-inside">
                <li>Blood pressure medication - 8:00 AM and 8:00 PM</li>
               
              </ul>

              <p>Health Monitoring:</p>
              <ul className="list-disc list-inside">
                <li>Daily step count goal - 10,000 steps</li>
                <li>Weekly weigh-in - Every Sunday morning</li>
              </ul>

             
            </div>
          </div>

          {/* Recent Activity */}
          <div className="w-full bg-zinc-800 py-4 rounded-md text-2xl px-2">
            Recent Activity
          </div>

          <div className="flex flex-col gap-y-3 m-4">
            <p>Recent Appointments:</p>
            <ul className="list-disc list-inside">
              <li>Visit to dermatologist - April 10, 2024</li>
              <li>Eye exam - March 15, 2024</li>
              <li>Physical therapy session - February 20, 2024</li>
            </ul>

            <p>Test Results:</p>
            <ul className="list-disc list-inside">
              <li>Blood test results - Normal</li>
              <li>Cholesterol levels - Slightly high</li>
              <li>Thyroid function - Normal</li>
            </ul>

            <p>Medical Records Updates:</p>
            <ul className="list-disc list-inside">
              <li>Updated insurance information - April 5, 2024</li>
              <li>Added recent vaccination - March 20, 2024</li>
              <li>New allergy noted - April 2, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
