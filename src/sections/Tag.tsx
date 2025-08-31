"use client";
import Image from "next/image";

type TagProps = {
  icon: string; // path to PNG
  label: string;
};

const tags: TagProps[] = [
  { icon: "/icons/motivational.png", label: "Motivational" },
  { icon: "/icons/lifestyle.png", label: "Lifestyle" },
  { icon: "/icons/art&creative.png", label: "Art & Creatives" },
  { icon: "/icons/awdorable.png", label: "Awwdorable" },
  { icon: "/icons/fun&humor.png", label: "Fun & Humor" },
  { icon: "/icons/peace.png", label: "Peace" },
  { icon: "/icons/wisdom.png", label: "Words & wisdom" },
  { icon: "/icons/news&insights.png", label: "News & Insights" },
  { icon: "/icons/movies&shows.png", label: "Movies & Shows" },
];

export default function Tag() {
  return (
    <section className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center px-6">
      {/* Title */}
      <div>
        <h1
          className="text-4xl font-extrabold mb-4 
          bg-gradient-to-b from-[#A78BFA] to-[#7649FC] bg-clip-text text-transparent"
        >
          A “tag” for everything
        </h1>
        <p className="text-lg md:text-xl max-w-[600px] text-gray-700 leading-relaxed mb-16">
          We’ve curated tags to help you find content that fits your mood — whether you want to laugh, express, heal, or simply belong.
        </p>
      </div>

      {/* Tag Scroller */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 py-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 flex-shrink-0 shadow-sm"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow">
                <Image
                  src={tag.icon}
                  alt={tag.label}
                  width={35}
                  height={35}
                  className="object-contain w-8 h-8"

                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
