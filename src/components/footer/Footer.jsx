import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logoHeader from "../../../public/icons/header-logo.svg";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='footer px-4 py-5 shadow-2xl z-50'>
            <div className='flex items-center justify-between'>
                <ul className='flex items-center gap-5 text-lg [&>li]:text-white hover:[&>li]:hover:text-green-500 [&>li]:transition-all'>
                    <li>
                        <Link href={""}>
                            <Image
                                priority
                                src={logoHeader}
                                alt='logo'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            SSS
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            İletişim
                        </Link>
                    </li>
                </ul>
                <ul className=' [&>li]:text-white hover:[&>li]:text-green-500 space-x-4 flex items-center [&>li]:transition-all'>
                    <li>
                        <Link href={""}>
                            <FaInstagram className='size-6' />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <FaXTwitter className='size-6' />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <FaLinkedin className='size-6' />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer