import React from 'react'
import logo1 from "../../../public/icons/logo.svg";
import Image from 'next/image';

const Process = () => {
    return (
        <div className='progress my-20 lg:my-40'>
            <h1 className='text-3xl lg:text-6xl font-light underline decoration-green-500 text-left mb-20'>
                Gelişme Sürecimiz
            </h1>
            <div className='progress-content flex flex-col lg:flex-row items-center relative gap-12'>
                <span className='line'></span>
                <div className='item flex flex-col items-start gap-2 lg:gap-0 w-full lg:w-2/3'>
                    <div>
                        <p className='text-zinc-600'>Nisan 11</p>
                        <h1 className='dotted text-5xl text-green-500 pb-6 lg:pb-24 relative'>2022</h1>
                    </div>
                    <div className="item-content flex gap-4 items-center">
                        <Image
                            priority
                            src={logo1}
                            alt='logo'
                            className='logo1 h-10 w-10'
                        />  
                        <div>
                            <h5>
                                İlk Geliştirme
                            </h5>
                            <p className='text-zinc-600'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>
                    </div>
                </div>
                <div className='item flex flex-col items-start gap-2 lg:gap-0 w-full lg:w-2/3'>
                    <div>
                        <p className='text-zinc-600'>Nisan 11</p>
                        <h1 className='dotted text-5xl text-green-500 pb-6 lg:pb-24 relative'>2022</h1>
                    </div>
                    <div className="item-content flex gap-4 items-center">
                        <Image
                            priority
                            src={logo1}
                            alt='logo'
                            className='logo1 h-10 w-10'
                        />  
                        <div>
                            <h5>
                                İlk Geliştirme
                            </h5>
                            <p className='text-zinc-600'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>
                    </div>
                </div>
                <div className='item flex flex-col items-start gap-2 lg:gap-0 w-full lg:w-2/3'>
                    <div>
                        <p className='text-zinc-600'>Nisan 11</p>
                        <h1 className='dotted text-5xl text-green-500 pb-6 lg:pb-24 relative'>2022</h1>
                    </div>
                    <div className="item-content flex gap-4 items-center">
                        <Image
                            priority
                            src={logo1}
                            alt='logo'
                            className='logo1 h-10 w-10'
                        />  
                        <div>
                            <h5>
                                İlk Geliştirme
                            </h5>
                            <p className='text-zinc-600'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process