import React from "react";
import { useState } from "react";
import { Sparkles, Edit, Hash, EraserIcon } from "lucide-react";
const RemoveBackGround = () => {

  const [input, setInput] = useState("");

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
            <Sparkles className="w-6 text-[#FF4938]" />
            <h1 className="text-xl font-medium">Background Removal</h1>
          </div>
          <p className="mt-6 text-sm font-medium">Upload image</p>
          <input
            onChange={() => setInput(e.target.files[0])}
            required
            accept="image/*"
            type="file"
            className="border border-gray-300 rounded-md w-full px-2 py-1 mt-2 online-none text-sm text-gray-600"
          />
          <p className="text-xs text-gray-500 font-light mt-2">Supports JPG , PNG and other image formats</p>
          <button className="w-full flex gap-4 items-center px-4 py-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white font-medium rounded cursor-pointer mt-7">
            <EraserIcon className="w-6" />
            Remove Background
          </button>
        </form>
        {/* Right side */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
          <div className="flex items-center gap-3">
            <EraserIcon className="w-5 h-5 text-[#FF4938]" />
            <h1 className="text-xl font-semibold">Process Image</h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-3 text-gray-400">
              <EraserIcon className="w-9 h-9 " />
              <p>Upload an image and click "Remove Background" to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackGround;
