"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="w-full px-6 py-16"
      style={{
        background:
          "linear-gradient(67.96deg, rgba(255, 239, 222, 0.6) 18.42%, rgba(206, 183, 255, 0.6) 98.55%)",
      }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">About Us</h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Half */}
        <div className="flex flex-col gap-6 justify-between">
          {/* First Container */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
            <p className="text-gray-700 mb-2">let&apos;s start from</p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                background:
                  "radial-gradient(87.39% 112.5% at 50.26% 100%, #C36AFD 0%, #7A5AF8 66.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The beginning
            </h3>
            <p className="text-gray-700 mb-4">
              Fly (First Love Yourself) is a mental wellness social platform
              where you can share your thoughts without revealing your identity,
              find uplifting and relatable content, and connect with certified
              Mental Health Professionals (MHPs).
            </p>
            <div className="flex justify-center my-4">
              <Image
                src="/icons/fly_half.png"
                alt="About Fly"
                width={400}
                height={250}
                className="rounded-lg object-contain max-h-[220px] w-auto"
              />
            </div>
            <p className="text-gray-700">
              We blend the freedom of social sharing with the safety of
              anonymity — creating a space where healing feels natural, not
              forced.
            </p>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex flex-col gap-6 justify-between">
          {/* First Container */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col flex-1">
            <p className="text-gray-700 mb-2">And why</p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                background:
                  "radial-gradient(87.39% 112.5% at 50.26% 100%, #C36AFD 0%, #7A5AF8 66.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fly Matters?
            </h3>
            <p className="text-gray-700 mb-4">
              1814 people take their lives every day (WHO). Reports may say the
              cause was “stress” or “depression,” but the truth often lies in
              the inability to share feelings or seek timely help.
            </p>
            <p className="text-lg text-gray-800 font-medium">
              We blend the freedom of social sharing with the safety of
              anonymity — creating a space where healing feels natural, not
              forced.
            </p>
          </div>

          {/* Second Container */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col flex-1">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                background:
                  "radial-gradient(87.39% 112.5% at 50.26% 100%, #C36AFD 0%, #7A5AF8 66.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fly exists to break that silence.
            </h3>
            <p className="text-gray-700">
              With AI-powered community building, safe anonymous profiles, and
              access to professionals, we’re here to make mental wellness
              accessible — from the biggest cities to the smallest towns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
