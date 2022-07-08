import axios from 'axios';
import { useState } from 'react';

import '../App.css';

const PlayerForm = ({setShowForm,setPlayers,fetchData}) => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [salary,setSalary] = useState('');
    const [link,setLink] = useState('');
    
    const submitHandle = async(e)=>{
        e.preventDefault();
        try{
            if(name!=="" && age!=="" && salary!=="" && link!==""){
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/addplayer`,{name,age,salary,img:link});
            await fetchData()
            setShowForm(false);
            }
        }catch(err){
            console.log(err);

        }

    }


    return (
        <div className="formContainer">
            <form className="formWrapper">
                <div className="header">
                    <div className="close" ><span onClick={()=>{setShowForm(false)}}>X</span></div>
                    <div className="title">ADD PLAYER</div>
                </div>
                <div className="divInput">
                    <label htmlFor="" className="name">Player Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" />
                </div>

                <div className="divInput">
                    <label htmlFor="" className="name">Player Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}}  type="text" />
                </div>

                <div className="divInput">
                    <label htmlFor="" className="name">Player Age</label>
                    <input onChange={(e)=>{setAge(e.target.value)}}  type="text" />
                </div>
                <div className="divInput">
                    <label htmlFor="" className="name">Player Image Link </label>
                    <input onChange={(e)=>{setLink(e.target.value)}}  type="text" />
                </div>
                <div className="buttonContainer">
                    <input type="submit" onClick={submitHandle}  className="submit" />
                </div>

            </form>
        </div>
     );
}
 
export default PlayerForm;