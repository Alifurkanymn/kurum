import React, { useEffect } from 'react'
import Image from 'next/image';
import logo1 from "../../public/icons/logo-1.svg";
import logo2 from "../../public/icons/logo-2.svg";
import loadingBg from "../../public/images/loading-bg.png";
import gsap from 'gsap';
const Loading = () => {
    useEffect(() => {
        gsap.to(".logo1", {
            zIndex: 4,
        });

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(".logo2", {
            xPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut"
        })
            .to(".logo2", {
                xPercent: 100,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut"
            })
            .set(".logo2", {
                xPercent: -300,
                opacity: 0,
            })
            .to(".logo2", {
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            });

    }, []);

    return (
        <div className='w-screen h-screen flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='flex items-center z-10'>
                    <Image
                        priority
                        src={logo1}
                        alt='logo'
                        className='logo1'
                    />
                    <Image
                        priority
                        src={logo2}
                        alt='logo'
                        className='logo2 -m-8'
                    />
                </div>
                <div className="z-10 w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '45%' }}></div>
                </div>
                <Image
                    priority
                    src={loadingBg}
                    alt='logo'
                    className='absolute'
                />
            </div>
        </div>
    )
}

export default Loading