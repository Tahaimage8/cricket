
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './compornents/homepage/banner'
import Navbar from './compornents/navbar/Navbar'
import Players from './compornents/players/Players';
const fetchPlayer = async()=>{
  // const res = await fetch("/public/data.json")
  const res = await fetch("/data.json");
  return res.json() ; 
}
function App() {
  const playersPromise = fetchPlayer();
  const [coin , setCoin] = useState(5000);

  return (
<>
<Navbar coin={coin}></Navbar>
<Banner></Banner>
<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
  <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
</Suspense>
</>
  )
}

export default App
