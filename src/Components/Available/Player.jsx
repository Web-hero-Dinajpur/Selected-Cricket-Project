import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const Player = ({ player, setAvalaibleBalance, availableBalance, setPurchesedPlayers, purchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)
    const { image, country, price, rating, playerName, position } = player
    // console.log(player)

    const handleSelected = () => {
        const playerPrice = parseInt(price)
        if (availableBalance < playerPrice) {
            alert('not enough Balance')

        }
        setIsSelected(true)
        setAvalaibleBalance(availableBalance - price)
        setPurchesedPlayers([...purchasedPlayers, player])
    }

    return (
        <div >
            <div className="p-4 bg-base-100 w-96 shadow-sm ">
                <figure>
                    <img className='rounded-xl mx-auto ' src={image} alt="" />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        <FaUserCircle />
                        <h2 className="card-title">{playerName}</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='flex items-center gap-1'><CiFlag1 /> {country}</span>
                        <span>{position}</span>
                    </div>
                    <hr />
                    <h4>Rating = {rating}</h4>
                    <div className='flex items-center justify-between'>
                        <h2>price{price}</h2>
                        <button disabled={isSelected} onClick={() => {
                            handleSelected()
                        }} className='btn'>{isSelected === true ? "selected" : "choise player"}</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Player;