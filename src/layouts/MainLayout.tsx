import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReactNode } from "react";
interface MainLayoutProps {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Header />
        <div className="bg-[#D3CBBE] relative">
          <div className="ml-2 pl-2  text-5xl rounded-t-md border-x-2 border-t-2 border-black -mb-1 bg-[#7D929E] text-white w-fit relative z-10 flex items-center">
            <img
              src="home.png"
              className="h-[20px] mt-3 pr-2 w-auto rendering-pixelated"
              alt=""
            />
            <p className="pr-20">Home</p>
            <div className="ml-auto">
              <img
                src="x.png"
                className="h-[20px] mt-3 mr-2 w-auto rendering-pixelated"
                alt=""
              />
            </div>
            <div className="absolute inset-0 rounded-t-md border-x-2 border-t-2 border-[#ADCADE]"></div>
          </div>
          <div className="bg-[#7D929E]  relative">
            <div className="border-t-2 border-black">
              <div className="border-t-2 border-[#ADCADE] "></div>
            </div>
            <div className=" ml-2 mr-4">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
