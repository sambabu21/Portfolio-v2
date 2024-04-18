import { motion } from "framer-motion" 
import { useState,useEffect } from "react"

export default function FlipCard(){
    const titles=["FRONTEND DEVELOPER","UI DEVELOPER","CREATIVE DESIGNER"," "]
    const [proIndex,setProIndex]= useState(0)
    

    useEffect(()=>{
        if(proIndex<3){
            const timer=setTimeout(()=>{
                setProIndex(proIndex+1)
            },1200)

            return ()=> clearTimeout(timer)
        }
    },[proIndex])

   

    return (
        <div className="w-screen h-screen flex  justify-center items-center">
            <motion.h1 className="text-4xl gasoek" animate={{x:250}} transition={{duration:1,delay:4}}>I AM, </motion.h1>
            <div className="w-[500px]">
                <motion.p
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    exit={{y:-50,opacity:0}}
                    transition={{duration:1}}
                    >
                    <h1 className={titles[proIndex]==="FRONTEND DEVELOPER" ? "text-4xl  mx-auto leading-[0] gasoek":"hidden"}>FRONTEND DEVELOPER</h1>
                </motion.p>
                <motion.p 
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                >
                    <h1 className={titles[proIndex]==="UI DEVELOPER" ? "text-4xl  mx-auto leading-[0] gasoek":"hidden"}>UI DEVELOPER</h1>
                </motion.p>
                <motion.p 
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:1,delay:2.4}}
                >
                    <h1 className={titles[proIndex]==="CREATIVE DESIGNER" ? "text-4xl  mx-auto leading-[0] gasoek":"hidden"}>CREATIVE DESIGNER</h1>
                </motion.p>
                <motion.p 
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:1,delay:3.6}}
                >
                    <h1 className={titles[proIndex]===" " ? "text-4xl mx-auto leading-[0] ":"hidden"}></h1>
                </motion.p>
                
            </div>
        </div>
    )
}