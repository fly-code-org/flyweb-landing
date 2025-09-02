"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[500px] md:h-[700px] mx-auto mt-[60px] md:mt-[114px] overflow-hidden"
    >
      {/* Background Sunrise Semi-circles */}
      <div className="absolute inset-0 flex justify-center items-end">
        <div className="w-[600px] h-[300px] md:w-[1000px] md:h-[490px] rounded-t-full 
          bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-5" />
        <div className="absolute bottom-0 w-[450px] h-[220px] md:w-[800px] md:h-[390px] rounded-t-full 
          bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-20" />
        <div className="absolute bottom-0 w-[300px] h-[150px] md:w-[600px] md:h-[290px] rounded-t-full 
          bg-[radial-gradient(circle_at_center,_#C36AFD,_#7A5AF8_70%)] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12 md:pt-16 h-full">
        <h1
          className="text-2xl md:text-5xl font-extrabold mb-4 
          bg-gradient-to-b from-[#A78BFA] to-[#7649FC] bg-clip-text text-transparent leading-snug md:leading-tight"
        >
          A safe space to connect, grow, and heal anonymously.
        </h1>

        <p className="text-sm md:text-lg text-gray-600 max-w-sm md:max-w-2xl mb-10">
          Ab dil ki baat dil me mat rakho,{" "}
          <span className="font-bold">fly</span> per share karo!
        </p>

      </div>

      {/* Image fixed at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] md:w-[400px] md:h-[400px] flex items-end">
        <Image
          src="/icons/happy.jpg"
          alt="FLY App"
          fill
          className="object-bottom"
        />
      </div>

    </section>
  );
}
