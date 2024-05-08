/** @format */

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Selection from "./components/Selection";
import BikeSelection from "./components/BikeSelection";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero/>
      <Selection/>
      <BikeSelection/>
      <Benefits/>
      <Footer/>
    </main>
  );
}
