import React from 'react';
import ButtonBase from './ButtonBase';

const PrimaryButton = (props) => {
    return <ButtonBase {...props} className={`bg-white text-black ${props.className}`} />;
};

export default PrimaryButton;
