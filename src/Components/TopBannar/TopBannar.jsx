import React from 'react';
import Navbar from '../Navbar/Navbar';
import Bannar from '../../assets/banner-main.png'
import moduleName from '../../assets/bg-shadow.png';
const TopBannar = ({availableBalance}) => {
    
    return (
        <div className='w-[1280px] mx-auto'>
            <Navbar availableBalance={availableBalance}></Navbar>
            <img className='' src={moduleName} alt="" />
            <img className='mx-auto -mt-110' src={Bannar} alt="" />
            <div className='w-full mx-auto text-center font-bold mt-6'>
                <h2 className='text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-xl my-4'>Beyond Boundaries Beyond Limits</p>
                <button className='btn bg-yellow-300 text-black'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default TopBannar;