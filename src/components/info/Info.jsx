import Image from 'next/image'
import item1 from "../../../public/icons/item-1.svg";
import item2 from "../../../public/icons/item-2.svg";
import item3 from "../../../public/icons/item-3.svg";
import item4 from "../../../public/icons/item-4.svg";
import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton';

const Info = () => {
    const handleClick = () => {
        console.log("click")
    }

  return (
      <div className='info my-20 lg:my-40'>
          <h1 className='text-3xl lg:text-6xl font-light underline decoration-green-500 text-right mb-20'>
                Genel Bilgilerimiz
            </h1>
          <div className='grid grid-cols-12 lg:gap-10 mt-6'>
            <div className='col-span-12 lg:col-span-6'>
                <div className='flex flex-col items-start justify-center h-full rounded-t-3xl lg:min-h-50-screen lg:p-8'>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="info-item bg-zinc-900 p-4 rounded-lg shadow h-60 relative overflow-hidden">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className='z-10 text-xl font-thin'>Total Kullanıcı Sayısı</h3>
                                <p className='text-green-500 text-3xl font-bold z-10'>+5000</p>
                                <Image
                                    priority
                                    src={item1}
                                    alt='logo'
                                    className='absolute top-2 left-2 h-40 w-40 opacity-10'
                                />  
                            </div>
                        </div>
                        <div className="info-item bg-zinc-900 p-4 rounded-lg shadow h-60 relative overflow-hidden">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className='z-10 text-xl font-thin'>Total Kullanıcı Sayısı</h3>
                                <p className='text-green-500 text-3xl font-bold z-10'>+5000</p>
                                <Image
                                    priority
                                    src={item2}
                                    alt='logo'
                                    className='absolute top-2 left-2 h-40 w-40 opacity-10'
                                />  
                            </div>
                        </div>
                        <div className="info-item bg-zinc-900 p-4 rounded-lg shadow h-60 relative overflow-hidden">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className='z-10 text-xl font-thin'>Total Kullanıcı Sayısı</h3>
                                <p className='text-green-500 text-3xl font-bold z-10'>+5000</p>
                                <Image
                                    priority
                                    src={item3}
                                    alt='logo'
                                    className='absolute top-2 right-2 h-40 w-40 opacity-10'
                                />  
                            </div>
                        </div>
                        <div className="info-item bg-zinc-900 p-4 rounded-lg shadow h-60 relative overflow-hidden">
                           <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className='z-10 text-xl font-thin'>Total Kullanıcı Sayısı</h3>
                                <p className='text-green-500 text-3xl font-bold z-10'>+5000</p>
                                <Image
                                    priority
                                    src={item4}
                                    alt='logo'
                                    className='absolute bottom-2 right-2 h-40 w-40 opacity-10'
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-6'>
                <div className='flex flex-col justify-center w-full h-full mt-6 lg:mt-0'>
                    <h3 className='text-3xl mb-3'>Günün kurunu ve Piyasayı
                        Analiz et, kaydet
                        hatırlat.</h3>
                      <p className='text-base text-zinc-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <PrimaryButton className="w-12 mt-4" type="button" title="Devam Et" onClick={handleClick} hasRightArrow={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info