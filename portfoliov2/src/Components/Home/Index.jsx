import {motion} from "framer-motion"
import proPic from "../../Assets/pro_pic_mask.png"
import { Typewriter,Cursor } from "react-simple-typewriter"

export default function Home(){
    const marqueeVariants = {
        initial:{
            opacity:0
        },
        animate: {
          x: [0, -1035],
          opacity:1,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
              delay:1.5,
            },
          },
        },
      };


    return (
        <div className="w-full  h-[80vh] relative  bg-[#242424] overflow-hidden -z-20" id="home">
            <img src={proPic} className="absolute bottom-0 right-0 "/>
            <div className="absolute inset-0 -z-10 w-full h-full">
                <h1 className="text-[#383838a8] text-[40vw] font-extrabold tracking-tighter -mt-16 sm:-mt-28 ">SAMBABU</h1>
            </div>
             <div className="absolute top-1/3 sm:top-1/2 -translate-y-1/2 ml-20">
                <h1 className="sm:text-[3rem] font-medium mb-10 text-[#f2f2f8]">Welcome to my portfolio👋</h1>
                <h1 className="sm:text-[3rem] font-medium text-[#f2f2f8]">My name is Sam,<br></br>
                    I am a  <span className="text-[#F15a24]">
                    <Typewriter
                        words={['Web Developer','UI Developer','Creative Designer']}
                        loop={0}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                    <span className="text-[#F15a24]">
                        <Cursor cursorStyle="."/>    
                    </span>
                </h1>
             </div>
        </div>
)}