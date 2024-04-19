import {motion,useScroll,useTransform} from "framer-motion"
import keralaImg from "../../Assets/Kerala.jpg"
import footballImg from "../../Assets/football.jpg"
import musicImg from "../../Assets/music.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function About(){
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress,[0,1],[0,-1000])
    const x2 = useTransform(scrollYProgress,[0,1],[-1000,0])


    return(
        <div className="relative overflow-hidden" id="about">
            <motion.div 
                    className="whitespace-nowrap my-10 sm:my-20">
                    <motion.h1 
                      style={{ x: x1 }}
                      className="text-[3rem] sm:text-[4rem] font-bold text-mask tracking-wide">ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT</motion.h1>
                    <motion.h1 
                      style={{ x: x2 }}
                      className="text-[3rem] sm:text-[4rem] font-bold -my-5  tracking-wide">ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT / ABOUT</motion.h1>
                    
                  </motion.div>
                  <div>
                    <div className="flex flex-col sm:flex-row  sm:h-[80vh] justify-around items-center mt-20">
                        <motion.img 
                            initial={{opacity:0}}
                            whileInView={{opacity:1,transition:{duration:1} }}
                            src={keralaImg} className="w-[50vw] sm:w-[20vw] rotate-6 sm:ml-10 mb-20 rounded-md"></motion.img>
                            
                        <h2 className="font-medium text-2xl sm:text-4xl w-[90%] sm:w-1/2">I come from the land known as God's own Country, KERALA, India.</h2>
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row sm:h-[80vh] justify-around items-center my-20 sm:my-0">
                        <h2 className="font-medium text-2xl sm:text-4xl w-[90%] sm:w-1/2">If you dont find me in front of a pc, look for me on the playground. </h2>
                        <motion.img 
                            initial={{opacity:0}}
                            whileInView={{opacity:1,transition:{duration:1} }}
                            src={footballImg} className="w-[50vw] sm:w-[20vw] -rotate-6 sm:mr-10 rounded-md mb-20"></motion.img>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:h-[80vh] justify-around items-center">
                        <motion.img 
                            initial={{opacity:0}}
                            whileInView={{opacity:1,transition:{duration:1} }}
                            src={musicImg} className="w-[50vw] sm:w-[20vw] h-[90%] rotate-6 sm:ml-10 rounded-md mb-20"></motion.img>
                        <h2 className="font-medium text-2xl sm:text-4xl w-[90%] sm:w-1/2">What is life without music?
                        Check out my instagram :  <a href="https://www.instagram.com/sam_babu_/" target="blank"><FontAwesomeIcon icon={faInstagram} className="text-[#F15a24]"/></a>
                        </h2>
                    </div>
                  </div>

        </div>
    )
}
