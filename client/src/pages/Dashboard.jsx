import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import {
  Gem,
  Sparkle,
  SparkleIcon,
  Sparkles,
  SparklesIcon,
} from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  const getDashboardData = () => {
    setCreation(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div className="h-full overflow-y-auto p-6">
      {/* Total creation card */}
      <div className="flex justify-start gap-4 flex-wrap">
        <div className="flex justify-between item-center w-72 p-4 px-6 py-2 bg-white rounded-xl border border-gray-200">
          <div className=" items-center gap-3">
            <h1 className="text-xl font-medium text-[#710080]">
              Total Creation
            </h1>
            <p className="text-slate-600 text-xl font-semibold">
              {creation.length}
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from from-[#710080] to-slate-600 text-white flex justify-center items-center">
            <SparklesIcon className="w-5 text-white" />
          </div>
        </div>
        {/* Active plane card */}
        <div className="flex justify-start gap-4 flex-wrap">
          <div className="flex justify-between item-center w-72 p-4 px-6 py-2 bg-white rounded-xl border border-gray-200">
            <div className=" items-center gap-3">
              <h1 className="text-xl font-medium text-[#710080]">
                Active Plane
              </h1>
              <p className="text-slate-600 text-xl font-semibold">
                <Protect plan="premium" fallback="Free">
                  Premium
                </Protect>
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from from-pink-600 to-[#710080] text-white flex justify-center items-center">
              <Gem className="w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {
          creation.map((item) => < CreationItem key={item.id} item={item} />)
        } 
      </div>

    </div>
  );
};

export default Dashboard;
