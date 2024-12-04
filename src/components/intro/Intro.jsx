import React, { useEffect } from 'react'
import introBgTop from "../../../public/images/intro-bg-top.png";
import introBgLeft from "../../../public/images/intro-bg-left.png";
import introBgRight from "../../../public/images/intro-bg-right.png";
import introTwoBlockBg from "../../../public/images/intro-two-block-bg.png";
import introFourBlockBg from "../../../public/images/intro-four-block-bg.png";
import Image from 'next/image';
import gsap from 'gsap';
import PrimaryButton from '../buttons/PrimaryButton';
import OutlineButton from '../buttons/OutlineButton';

const Intro = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: 0 });

        tl.fromTo(
            ".block-wrapper-left span",
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                ease: "power1.inOut",
            },
        );

        tl.to(".block-wrapper-left span", {
            rotation: 360,
            duration: 2,
            stagger: 0.5,
            ease: "power1.inOut",
            onComplete: function () {
                const targets = this.targets();
                targets.forEach((target) => {
                    if (target.classList.contains("block-green")) {
                        target.classList.add("green-shadow");
                    } else if (target.classList.contains("block-white")) {
                        target.classList.add("white-shadow");
                    }
                });
            },
        },
            "-=1.5"
        );

        tl.fromTo(
            ".block-wrapper-right span",
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
                ease: "power1.inOut",
            },
            "-=1.5"
        );

        tl.to(
            ".block-wrapper-right span",
            {
                rotation: 360,
                duration: 2,
                stagger: 0.5,
                ease: "power1.inOut",
                onComplete: function () {
                    const targets = this.targets();
                    targets.forEach((target) => {
                        if (target.classList.contains("block-green")) {
                            target.classList.add("green-shadow");
                        } else if (target.classList.contains("block-white")) {
                            target.classList.add("white-shadow");
                        }
                    });
                },
            },
            "-=1.5"
        );
    }, []);

    const handleClick = () => {
        console.log("click")
    }

    return (
        <div className='relative flex flex-col items-center justify-center intro-height'>
            <div className='flex items-center justify-center flex-col text-center z-10'>
                <h1 className='text-5xl lg:text-8xl font-bold text-white mb-3'>KUR
                    <span className='text-5xl lg:text-8xl font-bold text-green-500'>UM</span>
                    <span className='text-3xl lg:text-6xl font-light ms-4'>ile</span>
                </h1>
                <p className='text-3xl lg:text-6xl font-light mb-2'>Günün Kurunu ve Piyasayı</p>
                <div className='text-3xl lg:text-6xl font-light underline decoration-green-500'>
                    Analiz et, kaydet
                    <br />
                    hatırlat.
                </div>
                <div className='text-zinc-600 my-4 lg:my-10'>Hazırsan devam edelim.</div>
                <div className='flex items-center gap-4'>
                    <PrimaryButton type="button" title="Giriş Yap" onClick={handleClick} hasRightArrow={true} />
                    <OutlineButton type="button" title="Kayıt Ol" onClick={handleClick} hasRightArrow={false} />
                </div>
            </div>
            <div className='z-0'>
                <Image
                    priority
                    src={introBgLeft}
                    alt='logo'
                    className='hidden lg:block absolute left-0 top-0'
                />
                <Image
                    priority
                    src={introBgRight}
                    alt='logo'
                    className='hidden lg:block absolute right-0 top-2/4'
                />

                <div className='hidden lg:flex items-center gap-6 mt-4 -rotate-45 absolute left-0 bottom-0 opacity-25'>
                    <div className='block-wrapper block-wrapper-left gap-2'>
                        <span className='block-green'></span>
                        <span className='block-white'></span>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-4 -rotate-45 absolute right-1/4 lg:right-0 top-0 lg:top-10 opacity-25'>
                    <div className='block-wrapper block-wrapper-right gap-2'>
                        <span className='block-green'></span>
                        <span className='block-white'></span>
                    </div>
                    <div className='block-wrapper block-wrapper-right gap-2'>
                        <span className='block-white'></span>
                        <span className='block-green'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro