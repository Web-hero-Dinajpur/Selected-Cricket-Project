import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/Coin.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><summary>Parent</summary></li>
                    <li className='btn flex direction-row'>
                        <span>0</span>
                        <img className='w-12' src={coin} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;