'use client'
import React, { useState } from 'react'
import logoHeader from "../../../public/icons/header-logo.svg";
import Image from 'next/image';
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import PrimaryButton from '../buttons/PrimaryButton';

const Header = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const handleMobileMenu = () => {
        setIsVisibleMenu(!isVisibleMenu);
    };

    const handleSignIn = () => {
        console.log("first")
    }

    return (
        <div className='flex items-center justify-between py-8 lg:py-12'>
            <div className='logo'>
                <Image
                    priority
                    src={logoHeader}
                    alt='logo'
                />
            </div>
            <div className='menu hidden lg:block bg-zinc-900 p-2 px-5 rounded-3xl'>
                <ul className='flex items-center space-x-10 text-lg [&>li]:text-white hover:[&>li]:hover:text-green-500 [&>li]:transition-all menu-wrapper'>
                    <li className='active'>
                        <Link href={""}>
                            Anasayfa
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            Nasıl Kullanılır ?
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            İletişim
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='login hidden lg:block'>
                <PrimaryButton type="button"
                    title="Giriş Yap Veya Kayıt Ol"
                    className=""
                    onClick={handleSignIn}
                    hasRightArrow={true}
                />
            </div>
            <div className='mobile-menu block lg:hidden z-50'>
                <RiMenu3Line className='size-9 cursor-pointer' onClick={handleMobileMenu} />
                {
                    isVisibleMenu && (
                        <div className='absolute top-0 left-0 w-screen h-screen bg-zinc-800'>
                            <AiOutlineCloseSquare className='size-11 absolute top-8 right-7 cursor-pointer hover:text-green-500 transition-all' onClick={handleMobileMenu} />
                            <div className='mt-28 flex flex-col justify-between h-4/5'>
                                <div className='container'>
                                    <ul className='space-y-4 text-lg [&>li]:text-white hover:[&>li]:hover:text-green-500 [&>li]:transition-all'>
                                        <li>
                                            <Link href={""}>
                                                Anasayfa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>
                                                Nasıl Kullanılır ?
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>
                                                Hakkımızda
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>
                                                İletişim
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='container'>
                                    <ul className='border-t border-white py-4 [&>li]:text-white hover:[&>li]:text-green-500 space-x-4 flex items-center [&>li]:transition-all'>
                                        <li>
                                            <Link href={""}>
                                                <FaInstagram className='size-6'/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>
                                                <FaXTwitter className='size-6'/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>
                                                <FaLinkedin className='size-6'/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header