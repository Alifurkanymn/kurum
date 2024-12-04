import React from 'react';
import ButtonBase from './ButtonBase';

const OutlineButton = (props) => {
    return <ButtonBase {...props} className={`border border-gray-500 hover:bg-white hover:border-white hover:text-black transition-all ease-linear ${props.className}`} />;
};

export default OutlineButton;
