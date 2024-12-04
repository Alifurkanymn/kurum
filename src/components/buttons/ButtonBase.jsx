import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ButtonBase = ({ type, title, className, onClick, hasRightArrow }) => {
    return (
        <button type={type} className={`flex items-center justify-center font-semibold rounded-xl px-4 py-2 min-w-24 lg:min-w-40 min-h-12 ${className}`} onClick={onClick}>
            <span>{title}</span>
            {
                hasRightArrow && (
                    <div className='p-2 bg-green-500 rounded-lg ms-3'>
                        <FaArrowRight className="text-white" />
                    </div>
                )
            }
        </button>
    );
};

export default ButtonBase;
