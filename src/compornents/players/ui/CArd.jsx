import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
const CArd = ({player, setCoin, coin ,setSelectedPlayers, selectedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);
// console.log(coin) 
// console.log(player.price)
  // console.log(player.price)
  const handleChoosePlayer = ()=>{ 
    let newCoin = coin - player.price;
       if(newCoin >=0){
        setCoin(coin - player.price);
           
      } else{
        alert("taka nai gorib ")
        return;
      }
        setIsSelected(true);
      alert(`${player.playerName} Is selected`)
setSelectedPlayers([...selectedPlayers, player])

      }
    return (
  <div className="card bg-base-200  shadow-sm ">
  <figure>
   <div className='h-50 w-50'>
     <img src={player?.playerImage} alt="player" />
   </div>
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser>{player?.playerName}</h2>
    <div className='flex justify-between gap-2 items-center'>
        <div className='flex gap-2 items-center'>
        <FaFlag></FaFlag>
        <p>{player?.playerCountry}</p>
        </div>

        <button className='btn btn-soft'>Rounder</button>
    </div>

      <div className="divider"></div>
      <h2 className='font-bold'>Rating: {player?.rating}</h2>

      <div className='flex justify-between'>
        <p>{player?.battingStyle}</p>
        <p>{player?.bowlingStyle}</p>
      </div>
   
    <div className="card-actions justify-between items-center">
        <p className='font-semibold '>Price: ${player?.price}</p>
      <button className="btn btn-outline" onClick={handleChoosePlayer} disabled={isSelected=== true? true: false}>
        {isSelected=== true? "Selected" : "Choose Player"}

      </button>
    </div>
  </div>
</div>
    );
};

export default CArd;