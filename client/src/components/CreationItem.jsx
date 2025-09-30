import React from 'react'

const CreationItem = ({item}) => {
  return (
    <div className='p-4 max-w-5xl text-sm bg-white border border-gray-500 rounded-lg cursor-pointer'>
        <div className='flex justify-between items-center gap-4'>
            <div>
                <h2 className='text-slate-600'>{item.prompt}</h2>
                <p className='text-[#710080]'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='bg-slate-200 text-[#710080] border border-[#710080] py-1 px-2 rounded cursor-pointerz'>{item.type}</button>
        </div>
    </div>
  )
}

export default CreationItem;