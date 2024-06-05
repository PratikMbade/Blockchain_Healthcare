import { UpdateMedicalRecords } from '@/components/UpdateMedicalRecords'
import { uuidV4 } from 'ethers'
import React from 'react'

const Page = () => {
  return (
     <div>

         <div className='flex justify-center mt-5 mb-6'>
            <p className='text-4xl font-bold border-b-4 border-blue-500 w-fit'>Update Medical Records</p>
        </div>
        <UpdateMedicalRecords/>
     </div>
  )
}

export default Page