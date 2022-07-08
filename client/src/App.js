import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PlayerCard from "./Component/PlayerCard";
import PlayerForm from "./Component/PlayerForm";


function App() {
const [players, setPlayers] = useState(null);
const [showForm,setShowForm] = useState(false);

const fetchData = async()=>{
  try{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/players`);
    setPlayers(data.players);
    
  }catch(err){
    console.log(err);
  }
}

useEffect(() => {
        return async()=>{
          await fetchData();
        }
  }, []);

  return (
    <>
    <div className="page"> 
      <h1>Players Cards</h1>
      <div className="cardContainer">
        {
          players&&(players.map((player,index)=>(
            <PlayerCard showForm={showForm} setShowForm={setShowForm} key={index} player={player}/>
          )))
        }
      </div>
      <div className="buttonContainer">
        <button onClick={()=>{setShowForm(true)}} className="addPlayer">Add Player</button>
      </div>

    </div>
    {
      showForm && <PlayerForm fetchData={fetchData} setPlayers={setPlayers} setShowForm={setShowForm} showForm={showForm}/>

    }
        
    </>
  );
}

export default App;
