import express,{ Request, Response, Router } from 'express'
import playerModel from '../models/players.model'


const api = express.Router();

const playermodel = new playerModel()


api.get('/players',async (_: Request, res: Response)=>{
  console.log("passed to get");
    try {
      const players = await playermodel.index();
      res.json({
        status: 'success',
        message: 'players are indexed successfully',
        players
      })
    } catch (error) {
        throw new Error(`Error ${(error as unknown as Error).message}`)
    }

})

api.post('/addplayer',async(req,res)=>{
  try{
    await playermodel.create(req.body);
    res.status(201).json({
      msg:"Player is added"
    })
    

  }catch(err){
    console.log(err);
    res.status(400).json({msg:"Falid to add this player"});
    
  }
})

export default api;
