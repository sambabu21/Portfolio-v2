import {motion,useScroll,useTransform} from "framer-motion"
import Reveal from "../../Animations/Reveal";

export default function Contact(){
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress,[0,1],[0,-1000])
    const x2 = useTransform(scrollYProgress,[0,1],[-1000,0])


    return(
        <div className="overflow-hidden" id="contact">
                 <motion.div 
                    className="whitespace-nowrap my-20">
                    <motion.h1 
                      style={{ x: x1 }}
                      className="text-[3rem] sm:text-[4rem] font-bold text-mask tracking-wide">CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT</motion.h1>
                    <motion.h1 
                      style={{ x: x2 }}
                      className="text-[3rem] sm:text-[4rem] font-bold -my-5  tracking-wide">CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT</motion.h1>
                    
                  </motion.div>
                  <div className="sm:h-screen bg-[#292727] w-full mt-10 py-10">
                        <Reveal>
                            <h1 className="text-[#f2f2f8] inter font-bold text-[10vw] text-left ml-10">LET'S BUILD </h1>
                        </Reveal>
                        <div className="flex justify-between items-center">
                        <svg className="sm:w-20 ml-10 mt-10" width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48.033 45.9995C48.5849 45.9813 49.0177 45.519 48.9995 44.9671L48.7029 35.9719C48.6847 35.42 48.2225 34.9872 47.6705 35.0054C47.1185 35.0236 46.6858 35.4859 46.704 36.0378L46.9676 44.0335L38.9719 44.2971C38.42 44.3153 37.9872 44.7775 38.0054 45.3295C38.0236 45.8815 38.4859 46.3142 39.0378 46.296L48.033 45.9995ZM0.316576 1.73002L47.3166 45.73L48.6834 44.27L1.68342 0.269979L0.316576 1.73002Z" fill="#F15A24"/>
                        </svg>
                        <Reveal>
                            <h1 className="text-[#f2f2f8] inter font-bold text-[10vw] text-right mr-10">TOGETHER </h1>
                        </Reveal>
                        </div>
                        <div className="mt-10">
                            <a className="text-[#f2f2f8] inter font-bold text-[20px] sm:text-[50px] underline ml-10 hover:cursor-pointer hover:">
                            samjovebabu10@gmail.com
                            </a>
                        </div>
                  </div>
                  
        </div>
    )
}