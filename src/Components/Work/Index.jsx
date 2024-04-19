import { useEffect, useState } from "react";
import { getProjects } from "../../Api"
import {motion,useScroll,useTransform,AnimatePresence} from "framer-motion"
import ProjectTile from "./ProjectTile";
import Modal from "./Modal/Index";

export default function Work(){
    const [projects, setProjects] = useState([]);
    const [modal,setModal] = useState(false)
    const [detail,setDetail] = useState({})

    useEffect(() => {
      async function loadProjects() {
        try {
          const data = await getProjects();
          setProjects(data);
        } catch (err) {
          console.log(err);
        }
      }
      loadProjects();
    }, []);

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
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress,[0,1],[0,-1000])
    const x2 = useTransform(scrollYProgress,[0,1],[-1000,0])

    return (
      <AnimatePresence>
          <div className=" w-full mx-auto my-20 sm:my-32 flex flex-col justify-center items-center overflow-hidden" id="work"> 
              <div className="w-full mb-32 relative">
                  <motion.div 
                      className="absolute whitespace-nowrap">
                      <motion.h1 
                        style={{ x: x1 }}
                        className="text-[3rem] sm:text-[4rem] font-bold text-mask tracking-wide">WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS</motion.h1>
                      <motion.h1 
                        style={{ x: x2 }}
                        className="text-[3rem] sm:text-[4rem] font-bold -my-5  tracking-wide">WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS / WORKS</motion.h1>
                      
                    </motion.div>
              </div>
              <div className="flex flex-col mt-20 sm:mt-32 sm:w-[80%]">
                      {
                          projects.map((project,index)=>{
                              return (
                                <ProjectTile index={index} title={project.name} setModal={setModal} project={project} setDetail={setDetail} key={index}/>
                              )
                                  
                            
                          })
                      }

              </div>
              <Modal modal={modal} detail={detail} setModal={setModal} projects={projects} />
          </div>
        </AnimatePresence>
    )
}