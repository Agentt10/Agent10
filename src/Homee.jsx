import { useNavigate } from "react-router-dom";

const Homee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Card with Glassmorphism */}
      <div className="flex flex-col items-center justify-center w-full max-w-[400px] p-10 
                      bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] 
                      shadow-2xl gap-8 text-center">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-black tracking-tight">
            Security<span className="text-blue-400">!</span>
          </h1>
          <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 w-full">
          <p className="text-slate-600 text-lg font-medium">
             Tap below to start your secure journey
          </p>
          
          <button 
            onClick={() => navigate("/goal")} 
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 
                       text-white font-bold text-xl rounded-2xl transition-all 
                       duration-200 shadow-lg shadow-blue-500/30"
          >
            Start
          </button>
        </div>

      </div>
    </div>
  );
};

export default Homee;