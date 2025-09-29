import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-20'>
        <div className='text-center'>
            <h1 className='text-[#710080] text-[42px] font-semibold'>Choose Your Plane</h1>
            <p className='text-slate-600 max-w-lg mx-auto'>Start for free and scale up as you grow . find the perfect Plan for your content creation needs.</p>
        </div>
        <div className='mt-14 max-sm:mx-8'>
            < PricingTable />
        </div>
    </div>
  )
}
 
export default Plan