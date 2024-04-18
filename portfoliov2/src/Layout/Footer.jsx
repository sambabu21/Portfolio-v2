import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <div className="h-20 bg-[#F15a24] flex justify-between items-center px-2 sm:px-20">
            <p className="text-sm sm:text-lg">&copy;2024-Samjove Babu Porfolio</p>
            <div className="flex sm:gap-10 gap-5">
            <a href="https://www.linkedin.com/in/sam-babu-b80318171/" target=" " className="text-2xl">
                <FontAwesomeIcon icon={faLinkedin} className="text-[#292727] sm:w-10 sm:h-10 hover:text-gray-500" />
            </a>
                <a href="https://github.com/sambabu21" target=" " className="text-2xl">
                <FontAwesomeIcon icon={faGithub} className="text-[#292727] sm:w-10 sm:h-10 hover:text-gray-500" />
            </a>
                <a href="mailto:samjovebabu10@gmail.com" className="text-2xl">
                <FontAwesomeIcon icon={faInstagram} className="text-[#292727] sm:w-10 sm:h-10  hover:text-gray-500" />
                </a>
            </div>
        </div>
    )
}