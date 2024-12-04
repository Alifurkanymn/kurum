import React, { useEffect } from 'react'
import logo1 from "../../../public/icons/logo-1.svg";
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Blog = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 640px)",
                isDesktop: "(min-width: 1200px)",
            },
            (context) => {
                const { isMobile } = context.conditions;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.blog-wrapper',
                        pin: true,
                        start: 'top top',
                        end: '+=100%',
                        scrub: 1,
                        ease: 'linear',
                        pinSpacing: false,
                    },
                });

                tl.to('.item', {
                    marginBottom: isMobile ? -575 : -500,
                    stagger: 1,
                }, '<');

                return () => context.revert();
            }
        );
        const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = (target) =>
                (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

        gsap.registerPlugin({
            name: "blur",
            get(target) {
                return +getBlurMatch(target)[1] || 0;
            },
            init(target, endValue) {
                let data = this,
                    filter = gsap.getProperty(target, blurProperty),
                    endBlur = "blur(" + endValue + "px)",
                    match = getBlurMatch(target)[0],
                    index;
                if (filter === "none") {
                    filter = "";
                }
                if (match) {
                    index = filter.indexOf(match);
                    endValue =
                        filter.substr(0, index) +
                        endBlur +
                        filter.substr(index + match.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? " blur(0px)" : "blur(0px)";
                }
                data.target = target;
                data.interp = gsap.utils.interpolate(filter, endValue);
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });

        gsap.to(".blurry-text-fade-hold", {
            duration: 1.1,
            blur: 15,
            alpha: 0.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".blurry-text-fade-hold",
                start: "top bottom",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        });
    }, []);

    return (
        <div className='blog flex flex-col gap-8 mt-6' id="wrapper">
            <div id="content">
                <div className='flex justify-end items-end text-end mb-14 lg:my-20'>
                    <h1 className="blurry-text text-3xl lg:text-6xl font-light underline decoration-green-500">
                        <span className="blurry-text-fade-hold">Günün Kurunu Ve Piyasayı</span><br />
                        Analiz Et, Kaydet
                        <span className="blurry-text-fade-hold">
                            <br />
                            Hatırlat.
                        </span>
                    </h1>
                </div>
                <div className='blog-wrapper'>
                    <div className='grid grid-cols-12 gap-0 mt-6 item'>
                        <div className='col-span-12 lg:col-span-4'>
                            <div className='flex flex-col items-start justify-center bg-zinc-900 h-full rounded-t-3xl min-h-50-screen p-8'>
                                <h3 className='text-3xl mb-3'>Günün kurunu ve Piyasayı
                                    Analiz et, kaydet
                                    hatırlat.</h3>
                                <p className='text-base text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8 bg-zinc-800 p-4'>
                            <div className='flex justify-center items-center w-full h-full '>
                                <Image
                                    priority
                                    src={logo1}
                                    alt='logo'
                                    className='logo1'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-0 mt-6 item'>
                        <div className='col-span-12 lg:col-span-4'>
                            <div className='flex flex-col items-start justify-center bg-zinc-900 h-full rounded-t-3xl min-h-50-screen p-8'>
                                <h3 className='text-3xl mb-3'>Günün kurunu ve Piyasayı
                                    Analiz et, kaydet
                                    hatırlat.</h3>
                                <p className='text-base text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8 bg-zinc-800 p-4'>
                            <div className='flex justify-center items-center w-full h-full '>
                                <Image
                                    priority
                                    src={logo1}
                                    alt='logo'
                                    className='logo1'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-0 mt-6 item'>
                        <div className='col-span-12 lg:col-span-4'>
                            <div className='flex flex-col items-start justify-center bg-zinc-900 h-full rounded-t-3xl min-h-50-screen p-8'>
                                <h3 className='text-3xl mb-3'>Günün kurunu ve Piyasayı
                                    Analiz et, kaydet
                                    hatırlat.</h3>
                                <p className='text-base text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8 bg-zinc-800 p-4'>
                            <div className='flex justify-center items-center w-full h-full '>
                                <Image
                                    priority
                                    src={logo1}
                                    alt='logo'
                                    className='logo1'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog