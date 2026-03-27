import React from 'react';

import CArd from '../ui/card';


const AvailablePlayers = ({players}) => {
    // console.log(players)
    return (
        <div>

<div className='grid md:grid-cols-3 gap-3 sm:grid-cols-1'> 
    {
    players.map((player,index) => {
      return(
     <CArd key={index} player={player}></CArd>
      )
    })
}
</div>







        </div>
    );
};

export default AvailablePlayers;