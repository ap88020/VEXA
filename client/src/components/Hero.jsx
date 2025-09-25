import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-10 xl:px-20 ">
      <div className="text-center max-w-3xl px-10 py-3 border-2 border-[#710080] rounded-2xl">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-gray-800 font-extrabold leading-tight">
          Unleash Your Creativity with <br />
          <span className="text-[#710080] inline-flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-[#710080] animate-pulse" />
            AI-Powered Tools
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-700 text-lg sm:text-xl">
          Supercharge your content creation — write articles, generate
          stunning images, and streamline your workflow with the power of AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs mt-8">
          <button
            onClick={() => navigate("/ai")}
            className="py-3 px-10 bg-[#710080] text-white rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>

          <button className="py-3 px-10 border-2 border-[#710080] text-[#710080] rounded-2xl hover:bg-[#710080] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
            <Zap className="w-4 h-4 animate-pulse" /> Try Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 justify-center mt-10 text-[#710080] text-sm sm:text-base">
          <img src={assets.user_group} className="h-8" alt="User group" />
          <span className="font-medium">Trusted by 10K+ creators worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
