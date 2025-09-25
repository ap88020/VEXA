import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const user = useUser();
  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center ">
        <h2 className="text-[#710080] text-[42px] font-semibold">
          Power AI Tools
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Everything you need to create , enhance , and optimize your contnet
          with cutting-edge AI technology.
        </p>
      </div>

      <div className="flex flex-wrap justify-center m-10">
        {AiToolsData.map((tool, idx) => (
          <div
            key={idx}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
