import {motion,AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Header(){
    const [isOpen,setIsOpen] = useState(false)

    const menuToggle=()=>{
        setIsOpen((prevOpen)=>!prevOpen)
    }

    const links=[{name:"WORK",href:"#work"},{name:"ABOUT",href:"#about"},{name:"CONTACT",href:'#contact'}]

    const menuVars = {
        initial: {
          scaleY: 0,
        },
        animate: {
          scaleY: 1,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        exit: {
          scaleY: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

    const containerVars = {
        initial: {
          transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
          },
        },
        open: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
          },
        },
      };

    return (
        <div className="z-30">
            <motion.div 
                initial={{y:-20,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1,delay:1}}
                className="flex justify-between items-center px-5 sm:px-20 py-2 h-20">  
                <h1 className="text-2xl sm:text-5xl inter text-[#F15a24] font-black tracking-tighter">SAMBABU</h1>
                <p className="w-1/3 hidden sm:">I make cool stuff that performs.</p>
                <div className={isOpen?"hidden":"  w-10 h-10 bg-transparent flex justify-center items-center hover:cursor-pointer"}>
                        {/* <FontAwesomeIcon icon={faBarsStaggered} className={"w-5 h-5 sm:w-8 sm:h-8 text-[#F15a24]"} onClick={menuToggle}/> */}
                        {/* <FontAwesomeIcon icon={faXmark} className={isOpen?"w-3 h-3 sm:w-5 sm:h-5 text-[#F15a24]":"hidden"} onClick={menuToggle}/> */}
                   <button className={"text-[#242424] font-medium "} onClick={menuToggle}>Menu</button>
                </div>
            </motion.div>
            <AnimatePresence>
            {
            isOpen && 
            
                <motion.div 
                    variants={menuVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-screen w-full bg-[#242424] bg-opacity-95 fixed origin-top inset-0  flex flex-col justify-center items-center gap-10 z-10"
                >   
                    <motion.div 
                        initial={{y:"-30vh",opacity:0}}
                        animate={{y:0,opacity:1 ,transition:{duration:0.5,delay:0.5}}}
                        exit={{y:"-30vh",opacity:0,transition:{duration:0.5}}}
                        className="flex justify-between items-center px-5 sm:px-20 py-2 h-20  w-full">  
                        <h1 className="text-2xl sm:text-5xl inter font-black text-[#F15a24] tracking-tighter">SAMBABU</h1>
                        <div className="w-10 h-10 flex justify-center items-center hover:cursor-pointer">
                                {/* <FontAwesomeIcon icon={faBarsStaggered} className={isOpen?"hidden":"w-3 h-3 sm:w-5 sm:h-5 text-[#F15a24]"} onClick={menuToggle}/> */}
                                {/* <FontAwesomeIcon icon={faXmark} className={isOpen?"w-5 h-5 sm:w-8 sm:h-8 text-[#F15a24]":"hidden"} onClick={menuToggle}/> */}
                                <button className={isOpen?"font-medium text-[#f5f5fa] ":"hidden"} onClick={menuToggle}>Close</button>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={containerVars}
                        initial="initial"
                        animate="open"
                        exit="initial"
                        className="flex flex-col justify-center h-full items-center gap-10 ">
                        {   
                            links.map((link,i)=>{
                                return (
                                    <div className="overflow-hidden" key={i}>
                                        <MenuLink name={link.name} href={link.href} setIsOpen={setIsOpen}/>
                                    </div>
                                )
                            } )
                        }
                    </motion.div>
                            
                </motion.div>
           
            }
            </AnimatePresence>
        </div>
)}

const MenuLink =({ name,href,setIsOpen })=>{
    const linkVars={
        initial: {
            y: "100vh",
            transition: {
              duration: 0.9,
              ease: [0.37, 0, 0.63, 1],
            },
          },
          open: {
            y: 0,
            transition: {
              ease: [0, 0.55, 0.45, 1],
              duration: 1,
            },
          },
    }

    return (
        <motion.div 
            variants={linkVars}
            initial="initial"
            animate="open"
            exit="initial"
        >
            <a href={href} className="text-4xl sm:text-8xl font-bold text-header" onClick={()=>setIsOpen(false)}>{name}</a>
        </motion.div>
    )
}