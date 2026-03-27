import React from 'react';
import CArd from '../ui/CArd';



const AvailablePlayers = ({players, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    // console.log(players)
    return (
        <div>

<div className='grid md:grid-cols-3 gap-3 sm:grid-cols-1'> 
    {players.map((player,index) => {return( <CArd key={index} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers }></CArd>)})
}
</div>







        </div>
    );
};

export default AvailablePlayers;