export default function Footer(){
    return (
        <div className="flex justify-between items-center border-2 p-2 m-4 border-black rounded-lg font-poppins flex-col h-max sm:flex-row md:h-16">
            <div className="flex flex-col items-start p-4">
                <span>Copyrights © 2024, workwise All rights reserved </span>
                <span>Digital Partner<span><a href="https://www.indusnet.co.in/" target="_blank" className="hover:text-[#5046e5]"> Indus Net Technologies</a></span></span>
            </div>
            <div><span><a href="" className="hover:text-[#5046e5]">Privacy Policy</a></span> | <span><a href="" className="hover:text-[#5046e5]">Terms of Use</a></span> | <span><a href="https://www.linkedin.com" target="_blank" className="hover:text-[#5046e5]">LinkedIn</a></span></div>
        </div>
    ) 
}