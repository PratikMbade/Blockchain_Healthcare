import React from 'react'

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="flex justify-center mt-5">
      <p className="text-4xl font-bold border-b-4 border-b-blue-500 w-fit">Hospital Visits</p>
    </div>

    <div className="w-[70%] bg-gray-800 m-5 p-5 rounded-lg text-white">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 ">Recent Hospital Visits</h3>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          {/* Visit 1 */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Date</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">February 15, 2024</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Hospital</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">City General Hospital</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Reason for Visit</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Knee Pain</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Attending Doctor</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Dr. Emily Johnson</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Notes</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
              MRI ordered, follow-up scheduled in two weeks.
            </dd>
          </div>

          {/* Visit 2 */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Date</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">January 10, 2024</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Hospital</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">City General Hospital</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Reason for Visit</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Regular Checkup</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Attending Doctor</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Dr. Michael Green</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Notes</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">Blood tests were performed; results expected next week.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}

export default Page