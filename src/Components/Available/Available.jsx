import React, { use } from 'react';
import Player from './Player';

const Available = ({ playerAllData, setAvalaibleBalance, availableBalance, setPurchesedPlayers, purchasedPlayers }) => {
    const players = use(playerAllData)
    // console.log(players)
    return (
        <div className=' w-[1280px] mx-auto'>
            <div className='grid grid-cols-3 gap-4 rounded-lg'>
                {
                    players.map(player => <Player
                        setAvalaibleBalance={setAvalaibleBalance}
                        key={player.id}
                        player={player}
                        availableBalance={availableBalance}
                        purchasedPlayers={purchasedPlayers}
                        setPurchesedPlayers={setPurchesedPlayers}
                    ></Player>)
                }
            </div>


        </div>
    );
};

export default Available;