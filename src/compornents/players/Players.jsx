import React,{ use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";


const Players = ({playersPromise, setCoin, coin}) => {
    // console.log(playersPromise)
 const players = use(playersPromise)
//  console.log(players)

const [selectedType, setSelectedType] = useState('available')
    return (
        <div className="container mx-auto my-15">
            {/* players {players.length} */}
            <div className="flex justify-between items-center mb-5">
                {selectedType ==="available"? <h2 className="font-bold text-2xl">Available Players </h2> :<h2 className="font-bold text-2xl">Selected PLayers</h2>}

                <div>
                    <button onClick={()=> setSelectedType("available")} 
                    className={`btn ${selectedType ==="available" ? 'bg-[#E7FE29] text-[black]' : " bg-[#FFFFFF] "}  rounded-r-none rounded-l-xl text-[#13131360]`}>
                        Available ({players.length})</button>
                    <button onClick={()=> setSelectedType("selected")}
                     className={`btn ${selectedType ==="selected" ? 'bg-[#E7FE29] text-[black]' : "bg-[#FFFFFF]  "}  rounded-l-none rounded-r-xl text-[#13131360]`}>
                        Selected (0)</button>
                </div>
            </div>
         {selectedType ==="available"?   <AvailablePlayers players={players} setCoin={setCoin} coin={coin}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;