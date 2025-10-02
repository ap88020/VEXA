import { Edit, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const WriteArticle = () => {

  const writeArticle = [
    {length:800 , text:'Short (500-800 words)'},
    {length:1200 , text:'Medium (500-800 words)'},
    {length:1600 , text:'Long (1200+ words)'},
  ]

  const [input , setInput] = useState('');

  const [selectedLength,setSelectedLength] = useState([0])

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  }

  return (
    <div className='h-full flex flex-wrap gap-4 p-6 overflow-y-scroll items-start text-slate-700'>
        {/* left side */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg bg-white rounded-lg border border-gray-200 p-2'>
            <div className='flex items-center gap-3 px-2 py-3'>
              < Sparkles className='w-6 text-[#9234EA]' />
              <h1 className='text-xl font-medium'>Article Configuration</h1>
            </div>
            <p className='mt-6 text-sm font-medium'>Article Topic</p>
            <input onChange={()=>setInput(e.target.value)} required value={input} type="text" className='border border-gray-300 rounded-md w-full px-2 py-1 mt-2 online-none text-sm' placeholder='The Future of Ai....' />
            <p className='text-sm text-slate-700 mt-4 font-medium'>Article Length</p>
            <div className='mt-3 gap-3 flex flex-wrap p-2 sm:max-w-9/12'>
              {
                writeArticle.map((item,idx) => (
                  <span onClick={()=>setSelectedLength(item)} className={`border border-slate-600 rounded-md px-3 py-1 cursor-pointer ${selectedLength.text === item.text ? 'bg-gradient-to-tr from-[#786f5c] to-[#4c674a] text-white font-medium' : ''} `} key={idx}>{item.text}</span>
                ))
              }
            </div>
            <br />
            <button className='w-full flex gap-4 items-center px-4 py-2 bg-gradient-to-r from-[#3486ea] to-[#ab62e2] text-white font-medium rounded cursor-pointer'>
              < Edit className='w-6' />
              Generate Article
            </button>
        </form>
        {/* Right side */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
              <div className='flex items-center gap-3'>
                < Edit className='w-5 h-5 text-[#77797b]' />
                <h1 className='text-xl font-semibold'>Generated Article</h1>
              </div>
              <div className='flex-1 flex justify-center items-center'>
                <div className='text-sm flex flex-col items-center gap-3 text-gray-400'>
                < Edit className='w-9 h-9 text-[#77797b]' />
                <p>Enter a topic or click "Generate Article" to get started</p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default WriteArticle