
import DashboardNavbar from '@/components/DashboardNavbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'



const Dashboardlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-row '>
    <div>
        <Sidebar/>
    </div>
    <div className='w-full'>
        <DashboardNavbar/>
        <div>
        {children}
        </div>
        
    </div>
</div>
  )
}

export default Dashboardlayout