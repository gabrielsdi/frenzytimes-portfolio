import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Games />
        <Videos />
      </main>
      <Footer />
    </>
  );
}
