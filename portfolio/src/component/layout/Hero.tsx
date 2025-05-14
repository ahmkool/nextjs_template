'use client'

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";

function Hero() {
    return <div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
    <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-4/5 mobile:w-full mobile:text-center">
                <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">Greetings, I'm Ahmed</p>
                <p className="desktop:text-[3vw] mobile:text-[5vw]">a software engineer specializing in full stack development
                    <Typing />
                </p>
                <div className='flex mobile:hidden mt-6 justify-start w-[17vw]'><SocialMedia size={50} /></div>
            </div>
            <img className="w-1/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse rounded-full" src="/profile-linkedin.jpg" alt="Portrait" />
        </div>
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
        <Link href={"/#About"} aria-label='About' >
            <Arrow />
        </Link>
    </div>
    </div>
}

export default Hero;