import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/Coin.png'
const Navbar = ({ availableBalance }) => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><summary>Parent</summary></li>
                    <button className="btn btn-ghost btn-circle ml-4">
                        <div className="btn indicator flex items-center">
                            <span>{availableBalance}</span>
                            <img className='w-[25px]' src={coin} alt="" />
                        </div>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;