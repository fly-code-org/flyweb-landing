"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-[1440px] h-[700px] mx-auto mt-[114px] overflow-hidden"
    >
      {/* Background Sunrise Semi-circles */}
      <div className="absolute inset-0 flex justify-center items-end">
        <div className="w-[1000px] h-[490px] rounded-t-full bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-5" />
        <div className="absolute bottom-0 w-[800px] h-[390px] rounded-t-full bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-20" />
        <div className="absolute bottom-0 w-[600px] h-[290px] rounded-t-full bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 h-full">
        <h1
          className="text-6xl font-extrabold mb-4 
          bg-gradient-to-b from-[#A78BFA] to-[#7649FC] bg-clip-text text-transparent"
        >
          A safe space to connect, grow, and heal anonymously.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Ab dil ki baat dil me mat rakho, fly per share karo!
        </p>

        {/* Center Image fixed at base of semi-circles */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[400px] h-[400px]">
          <Image
            src="/icons/happy.jpg"
            alt="FLY App"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
