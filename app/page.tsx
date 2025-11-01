import CodeFix from "@/components/CodeFix";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <CodeFix />
        <Footer />
      </main>
    </>
  );
}
