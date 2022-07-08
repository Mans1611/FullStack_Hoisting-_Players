import { useState } from 'react';
import '../App.css';
import PlayerForm from './PlayerForm';

const PlayerCard = (props) => {
    
    return ( 
        <div className="playerCard">
            <div className="imageWrapper">
                <img src={props.player.img} alt="" />
            </div>
            <div className='playerDetails'>
                <h3>Name : {props.player.name}</h3>
                <h3>Age : {props.player.age}</h3>
                <h3>Salary : {props.player.salary}</h3>
            </div>
            <div className='buttonWrapper'>
                <button className="delteButton">Delete This Player</button>
            </div>
            </div>
     );
}
 
export default PlayerCard;