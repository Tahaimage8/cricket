
import React from 'react';

import SelectedCard from '../ui/selectedCard';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers,setCoin ,coin}) => {
//    console.log(selectedPlayers, "selectedPlayers")

const handleDeleteSelectedPlayer = (player)=>{

    const filterPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !==player.playerName)
    setSelectedPlayers(filterPlayers)
   setCoin(Number(coin) + Number(player.price));
}
    return (
        <div>
<div className='space-y-4'>
               {selectedPlayers.length ===0 ? 
               <div className='h-100 flex items-center justify-center flex-col gap-4'> 
                <h2 className='text-5xl'>No PLayers Selected Yet</h2>
                <p className='text-xl'>Go to Available tab to select players</p>
                
                
                </div>:
               selectedPlayers.map((player,index)=>{
            return(
  <SelectedCard key={index} player={player}  handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>

            )

           } )}
        </div>
</div>
    );
};

export default SelectedPlayers;