import Bar from "@/components/sections/Bar";
import DiscountPrice from "@/components/sections/DiscountPrice";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import NewsLetter from "@/components/sections/NewsLetter";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="circle Position tested-12 w-[500px] h-[500px] bg-[#FF5722] opacity-50 rounded-[100%] absolute z-[-5] top-[50%] left-[-5%] top-[0%] left-[0%] translate-x-[-50%] translate-y-[-50%] blur-[150px] overflow-hidden"></div>
      {/* <div className="circle w-250 h-250 top-603.5 left-625.5 opacity-50 bg-yellow-400 rounded-full absolute z-n1 transform-translate filter-blur"></div> */}
      <div className="circle" style={{
        overflow: 'hidden',
        width: "250px",
        height: "250px",
        top: "180%",
        left: "100%",
        opacity: "50%",
        background: "#FACD49",
        borderRadius: "50%",
        position: "absolute",
        zIndex: "-1",
        transform: "translate(-100%, -50%)",
        filter: "blur(100px)"
        }}></div>
      <Hero />
      <Bar />
      <Services />
      <DiscountPrice />
      <NewsLetter />
      <Footer />
    </div>
  );
}
