import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
import reactLogo from "../../Assets/react-logo.png"
import jsLogo from "../../Assets/JavaScript-Logo.png"
import cssLogo from "../../Assets/css-logo.png"
import htmlLogo from "../../Assets/html-logo.png"
import framerLogo from "../../Assets/framer-motion-logo.png"
import tailwindLogo from "../../Assets/tailwindcss_logo.png"
import reactqueryLogo from "../../Assets/React-Query-logo.png"
import pythonLogo from "../../Assets/python-logo.png"


export default function Skills(){

    return (
        <div className="w-full  overflow-hidden mb-10">
            <div className="sm:w-[80%] mx-auto flex justify-start items-center  ">
                <h1 className="font-medium text-[1.4rem] sm:text-4xl relative mx-5 sm:mx-0">
                    Technologies i am familiar with :
                    {/* <FontAwesomeIcon icon={faArrowTurnDown} className="w-16 h-16 absolute -right-20 top-1/2"/> */}
                </h1>
            </div>
            <div className="w-[80vw] mx-auto flex flex-wrap mt-10">
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={reactLogo} className=" w-2/3"/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={jsLogo} className=" w-4/5"/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={htmlLogo} className=""/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={cssLogo} className=" w-2/3"/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={framerLogo} className=" w-4/5"/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={tailwindLogo} className=""/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={reactqueryLogo} className=" w-2/3"/>
                </div>
                <div className="w-[20vw]  flex justify-center items-center">
                    <img src={pythonLogo} className=""/>
                </div>
            </div>
        </div>
    )
}