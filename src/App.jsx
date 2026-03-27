
import { Suspense } from 'react';
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

  return (
<>
<Navbar></Navbar>
<Banner></Banner>
<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
  <Players playersPromise={playersPromise}></Players>
</Suspense>
</>
  )
}

export default App
