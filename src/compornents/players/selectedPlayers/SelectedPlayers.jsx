import filter from 'daisyui/components/filter';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete, MdOutlineStarRate } from 'react-icons/md';

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
               {selectedPlayers.map((player,index)=>{
            return(
                <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border' >
                   <div className="flex" >
                    <img className='h-20 w-auto' src={player?.playerImage} alt='img'/>
                   <div className='gap-2 items-center font-semibold text-xl m-2'>
                    <h2  className='flex items-center gap-2 '><FaUser/>{player?.playerName}</h2> 
                    <p className='flex items-center gap-2 '><MdOutlineStarRate></MdOutlineStarRate>{player?.rating}</p>
                    </div> 
                   </div>
                   <div>
<button className='btn btn-outline text-red-500' onClick={()=>handleDeleteSelectedPlayer(player)}>
    <MdDelete></MdDelete>
    </button>
                </div> 
                </div>
            )

           } )}
        </div>
</div>
    );
};

export default SelectedPlayers;