import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
// import styles from './style.module.css';
// import gsap from 'gsap';


const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Modal({modal,detail, projects,setModal}) {
  // const { active, index } = modal;

  // const modalContainer = useRef(null);
  // const cursor = useRef(null);
  // const cursorLabel = useRef(null);

  // useEffect( () => {
  //   //Move Container
  //   console.log(modalContainer.current)
  //   let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
  //   let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
  //   //Move cursor
  //   let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
  //   let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
  //   //Move cursor label
  //   let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
  //   let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  
  //   window.addEventListener('mousemove', (e) => {
  //     const { pageX, pageY } = e;
  //     xMoveContainer(pageX)
  //     yMoveContainer(pageY)
  //     xMoveCursor(pageX)
  //     yMoveCursor(pageY)
  //     xMoveCursorLabel(pageX)
  //     yMoveCursorLabel(pageY)
  //   })

  // }, [])

  return (
    // <>
    //     <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
    //         <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
    //         {
    //             projects.map( (project, index) => {
    //             const { imageUrl,color } = project
    //             return <div className={styles.modal} style={{backgroundColor:color}}  key={`modal_${index}`}>
    //                 <img 
    //                 src={imageUrl}
    //                 width={300}
    //                 height={0}
    //                 alt="image"
    //                 />
    //             </div>
    //             })
    //         }
    //         </div>
    //     </motion.div>
    //     <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
    //     <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Visit</motion.div>
    // </>
    <>
    
    {
      
      modal?<div className='h-screen w-screen bg-[#292727] bg-opacity-10 flex justify-center items-center fixed inset-0 z-20'>
      
        <div className='sm:w-1/2 sm:h-2/3 bg-[#292727] flex flex-col justify-star items-center gap-10 p-5 sm:pt-5 rounded-md'>
            <div className='flex justify-end items-end  w-[90%] '>
              <p onClick={()=>setModal(false)} className='hover:cursor-pointer text-[#F15a24] font-medium'>Close</p>
            </div>
            <img src={detail.imageUrl} className='w-[500px]'/>
            <a className='border border-[#F15a24] p-2 rounded-[8px] flex justify-center items-center w-[150px] h-[60px] gap-2 hover:gap-4' href={detail.link} target='blank'>
              <button className='text-[#F15a24] font-bold text-lg '>Visit site</button>
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9912 0.867836C14.9182 0.320396 14.4153 -0.0642197 13.8678 0.00877228L4.94679 1.19825C4.39935 1.27124 4.01473 1.7742 4.08772 2.32164C4.16071 2.86908 4.66367 3.25369 5.21111 3.1807L13.1409 2.12339L14.1982 10.0532C14.2712 10.6007 14.7742 10.9853 15.3216 10.9123C15.8691 10.8393 16.2537 10.3363 16.1807 9.78889L14.9912 0.867836ZM1.79436 18.6075L14.7944 1.60745L13.2056 0.39255L0.205642 17.3925L1.79436 18.6075Z" fill="#F15A24"/>
              </svg>


            </a>
        </div>
    </div> : null
  
  }
  </>
  )
}