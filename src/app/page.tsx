import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import About from "@/components/About";
import { CardDemo } from "@/components/CardDemo";
import Events from "@/components/Events";
import Product_services from "@/components/Product_services";
import Footer from "@/components/Footer";
import Footer_second from "@/components/Footer_second";
export default function Home() {
  return (
    <div>
    <Hero/>
    <About/>
    <CardDemo/>
    <Events/>
    <Teams/>
    <Product_services/>
    <Footer_second/>
    <Footer/>
    </div>
  );
}
