import React from 'react';
import soldierLevelIcon from '../assets/images/soldier_level_icon.png';

const Brand = () => {
    const brandRingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        border: '2px solid',
        borderRadius: '50%',
        borderColor: 'rgb(255, 221, 0) rgb(255, 221, 0) rgb(255, 221, 0) rgba(234, 231, 231, 0.86)'
    };

    return (
        <div style={brandRingStyle} >
            <img src={soldierLevelIcon} height={40} width={40} alt="Soldier Level Icon" />
        </div >
    );
};

export default Brand;
