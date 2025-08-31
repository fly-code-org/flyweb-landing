import React from "react";

const ForMHPs = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        For MHPs — Your Second Workplace
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Half - Image */}
        <div className="flex justify-center">
          <img
            src="/icons/mentalhealth.jpg"
            alt="MHPs Workplace"
            className="w-[85%] max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Half - Content */}
        <div className="space-y-8">
          {/* Point 1 */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3F8EFC] to-[#F52F79] text-transparent bg-clip-text">
              Public Profiles That Stand Out
            </h3>
            <p className="text-gray-700 mt-2">
              Showcase your work, services, and expertise in a verified profile
              on a platform dedicated to mental health.
            </p>
          </div>

          {/* Point 2 */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3F8EFC] to-[#F52F79] text-transparent bg-clip-text">
              Communities That Grow With You
            </h3>
            <p className="text-gray-700 mt-2">
              Create a community under a tag, share posts, engage with members,
              and turn followers into loyal clients.
            </p>
          </div>

          {/* Point 3 */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3F8EFC] to-[#F52F79] text-transparent bg-clip-text">
              Monetize Your Expertise
            </h3>
            <p className="text-gray-700 mt-2">
              Offer paid memberships for exclusive content, private groups, or
              group sessions — similar to YouTube Memberships.
            </p>
          </div>

          {/* Point 4 */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3F8EFC] to-[#F52F79] text-transparent bg-clip-text">
              Your Client Funnel, Built-In
            </h3>
            <p className="text-gray-700 mt-2">
              Everyone on Fly is here for wellness. That means more relevant
              connections and less wasted time.
            </p>
          </div>

          {/* Point 5 */}
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#3F8EFC] to-[#F52F79] text-transparent bg-clip-text">
              NIRA — Your Personal Assistant
            </h3>
            <p className="text-gray-700 mt-2">
              Get help with reminders, audience engagement, and even content
              ideas so you can focus on helping people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForMHPs;
