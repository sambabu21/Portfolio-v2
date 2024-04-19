// import {motion} from "framer-motion"

// export default function ProjectTile({name,index,setModal}){
//     return( <motion.div 
//                 whileHover={{opacity:"40%"}}
//                 onMouseEnter={()=>{setModal({active:true,index:index})}}
//                 onMouseLeave={()=>{setModal({active:false,index:index})}}
//                 index={index}
//                 className="border-b h-32 flex justify-between items-center relative group px-10">
//                 <h1 className="font-medium text-4xl transition group-hover:-translate-x-2 ease-in duration-100">{name}</h1>
//                 <p className="transition group-hover:translate-x-2 ease-in duration-100">LEARN MORE →</p>
//                 {/* <div className="bg-[#242424] h-full w-full absolute hidden -z-10 group-hover:block"></div> */}
//             </motion.div>)

// }


import styles from './style.module.css';

export default function ProjectTile({index, title, setModal, project,setDetail }) {

    const handleclick=(project)=>{
        setDetail(project)
        setModal(true)
    }

    return (
        <div className="project gap-5 group" onClick={()=>{handleclick(project)}}>
            <div className='w-2/3 sm:w-3/4'>
                <h2 className="font-medium text-xl sm:text-4xl transition group-hover:-translate-x-2 ease-in duration-100">{title}</h2>
                <p className='hidden group-hover:block'>click for preview</p>
            </div>
            <p className="transition group-hover:translate-x-2 ease-in duration-100 text-xs sm:text-md">Design & Development</p>
        </div>
    )
}