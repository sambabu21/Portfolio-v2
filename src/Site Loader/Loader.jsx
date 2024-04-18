/* eslint-disable react/jsx-key */
import { motion,AnimatePresence} from 'framer-motion'
import { useState,useEffect } from 'react';
import FlipCard from './FlipCard';



//variants
const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAnimation = {
    initial: { y:150 },
    animate: {
      y:0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
      end:{
        y:-100,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        
      }
    },
  };


export default function Loader({ setLoading }){
    const [hide,setHide]=useState(false)
    useEffect(()=>{
        const timer=setTimeout(() => {
            setHide(true)
        }, 5800);
    })
   
    return (
        <>
        {hide ? (<motion.div 
                    className="flex h-screen justify-center items-center overlay-hidden relative gap-5" 
                    variants={banner}
                    exit={{scale:0,position:" ",left:0,top:0,duration:2}}
                >
                <LoaderTopRow title={"SAM"}/>      
                <LoaderBottomRow title={"BABU"}/>      
            </motion.div>) : <FlipCard />}
        </>
    )
}

    
function AnimatedLetters({ title }){
    return (
        <motion.span 
            variants={banner}
            initial="initial"
            animate="animate"
            end="end"
            className='flex items-center overlay-hidden'
        >
            {
                [...title].map((letter)=>(
                    <motion.span className="text-[15rem] gasoek" variants={letterAnimation} exit={{opacity:0,y:-100}}>{letter}</motion.span>
                )
                )
            }
        </motion.span>)

}

function LoaderTopRow({title}){
    return (
        <div >
            <AnimatedLetters title={title}/>
        </div>)
}
function LoaderBottomRow({title}){
    return (
        <div className>
            <AnimatedLetters title={title}/>
        </div>)
}