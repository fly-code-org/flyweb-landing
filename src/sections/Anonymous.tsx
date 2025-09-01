import React from "react";

export default function AnonymousSection() {
  return (
    <section
      className="relative w-full py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/icons/anonymousbg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Half */}
        <div className="flex flex-col items-center text-center">
          <div className="text-8xl mb-6">
            <img src="/icons/sad.png" alt="Sad face" className="w-20 h-20" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
            Elsewhere, you have to pretend.
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-sm">
            Your identity is exposed, and it’s hard to find the support you need.
          </p>
        </div>

        {/* Right Half */}
        <div className="flex flex-col items-center text-center">
          <div className="text-8xl mb-6">
            <img src="/icons/happy.png" alt="Happy face" className="w-20 h-20" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
            With Fly you stay
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-sm">
            anonymous, safe, and surrounded by people who truly listen.
          </p>
        </div>

      </div>
    </section>
  );
}
