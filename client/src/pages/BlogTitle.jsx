import React from "react";
import { useState } from "react";
import { Sparkles , Edit, Hash } from "lucide-react";
const BlogTitle = () => {
    const blogCategories = ['General','Technology','Business','Health','Lifestyle','Education','Travel','Food'];
  
    const [input , setInput] = useState('');
  
    const [selectedCategories,setSelectedCategories] = useState('General')
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
  
    }
  return (
    <div>
      <div className="h-full flex flex-wrap gap-4 p-6 overflow-y-scroll items-start text-slate-700">
        {/* left side */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-lg bg-white rounded-lg border border-gray-200 p-2"
        >
          <div className="flex items-center gap-3 px-2 py-3">
            <Sparkles className="w-6 text-[#8E37EB]" />
            <h1 className="text-xl font-medium">AI Title Generator</h1>
          </div>
          <p className="mt-6 text-sm font-medium">Keyword</p>
          <input
            onChange={() => setInput(e.target.value)}
            required
            value={input}
            type="text"
            className="border border-gray-300 rounded-md w-full px-2 py-1 mt-2 online-none text-sm"
            placeholder="The Future of Ai...."
          />
          <p className="text-sm text-slate-700 mt-4 font-medium">
            Category
          </p>
          <div className="mt-3 gap-3 flex flex-wrap p-2 sm:max-w-9/12">
            {blogCategories.map((item) => (
              <span
                onClick={() => setSelectedCategories(item)}
                className={`border border-slate-600 rounded-md px-3 py-1 cursor-pointer ${
                  selectedCategories === item
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-500 border-gray-500"
                } `}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <br />
          <button className="w-full flex gap-4 items-center px-4 py-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white font-medium rounded cursor-pointer">
            <Hash className="w-6" />
            Generate Title
          </button>
        </form>
        {/* Right side */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
          <div className="flex items-center gap-3">
            <Hash className="w-5 h-5 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">Generated Titles</h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-3 text-gray-400">
              <Hash className="w-9 h-9 text-[#77797b]" />
              <p>Enter a topic or click "Generate Title" to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
