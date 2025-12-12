import React from "react";
import { useState } from "react";
import { Sparkles, Edit, Hash, Image } from "lucide-react";

const GenerateImages = () => {
  const imageStyle = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="h-full flex flex-wrap gap-4 p-6 overflow-y-scroll items-start text-slate-700">
        {/* left side */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-lg bg-white rounded-lg border border-gray-200 p-2"
        >
          <div className="flex items-center gap-3 px-2 py-3">
            <Sparkles className="w-6 text-[#00AD25]" />
            <h1 className="text-xl font-medium">AI Image Generator</h1>
          </div>
          <p className="mt-6 text-sm font-medium">Describe Your Image</p>
          <textarea
            onChange={() => setInput(e.target.value)}
            required
            value={input}
            rows={4}
            className="border border-gray-300 rounded-md w-full px-2 py-1 mt-2 online-none text-sm"
            placeholder="Describe what you want see the image"
          />
          <p className="text-sm text-slate-700 mt-4 font-medium">Category</p>
          <div className="mt-3 gap-3 flex flex-wrap p-2 sm:max-w-9/12">
            {imageStyle.map((item) => (
              <span
                onClick={() => setSelectedStyle(item)}
                className={`border border-slate-600 rounded-md px-3 py-1 cursor-pointer ${
                  selectedStyle === item
                    ? "bg-green-50 text-green-700"
                    : "text-gray-500 border-gray-500"
                } `}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="my-6 flex items-center gap-2">
            <label className="relative cursor-pointer">
              <input
                type="checkbox"
                onChange={(e) => setPublish(e.target.checked)}
                checked={publish}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
              <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
            </label>
            <p className="text-sm">Make this image public</p>
          </div>

          <br />
          <button className="w-full flex gap-4 items-center px-4 py-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white font-medium rounded cursor-pointer">
            <Image className="w-6" />
            Generate Image
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

export default GenerateImages;
