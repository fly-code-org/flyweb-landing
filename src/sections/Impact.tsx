"use client";

import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center px-4 md:px-6 py-16 md:py-20">
      {/* Background Image (Digital Earth) */}
      <div className="absolute inset-0">
        <Image
          src="/icons/digital_earth.jpg"
          alt="Digital Earth"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl px-2">
        {/* 2nd Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-snug">
          7,20,043 people take their lives every year
        </h2>

        {/* 3rd Title */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          Autopsy reports often indicate the cause of death as stress and depression.
          The real cause, like the inability to express feelings or seek help, is ignored.
        </p>

        {/* White Containers */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-5 w-full sm:w-[280px] md:w-[300px]">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              100% Safe & Anonymous
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg px-6 py-5 w-full sm:w-[280px] md:w-[300px]">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              Trusted by +100 of MHPs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
