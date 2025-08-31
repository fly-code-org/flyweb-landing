// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Home from "@/sections/Hero";
import Impact from "@/sections/Impact";
import Tag from "@/sections/Tag";
import About from "@/sections/About";
import EverythingSection from "@/sections/Everything";
import ForMHPs from "@/sections/ForMHPs";

export default function Page() {
  return (
    <><Home />
    <br></br>
    <Impact />
    <Tag />
    <br></br>
    <About />
    <br></br>
    <EverythingSection />
    <ForMHPs />
    </>

    
  );
}
