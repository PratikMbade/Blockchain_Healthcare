import { PaperClipIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex justify-center mt-5'>
            <p className='text-4xl font-bold border-b-4 border-blue-500 w-fit'>My Medical Records</p>
        </div>

        <div className='w-[70%] bg-gray-800 m-5 p-5 rounded-lg text-white'>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 ">Medical Information</h3>
            </div>
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Patient Name</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Pratik Bade</dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Date of Birth</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">June 02, 2002</dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Gender</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Male</dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Emergency Contact</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Siddhesh Gosavi - 555-123-4567</dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Medical History</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                            Hypertension (Diagnosed: June 12, 2019), Type 2 Diabetes (Diagnosed: September 7, 2018), Asthma (Diagnosed: April 3, 2015)
                        </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Medications</dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                            Metformin (500 mg, Twice a Day), Lisinopril (10 mg, Once a Day), Albuterol Inhaler (As Needed), Atorvastatin (20 mg, Once a Day)
                        </dd>
                    </div>
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 ">Attachments</dt>
                        <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                            <PaperClipIcon className="w-6 h-6 inline-block mr-2 text-blue-500" />
                            <a href="/path/to/record.pdf" className="text-blue-500 underline">Lab Report - January 2024</a>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Page
