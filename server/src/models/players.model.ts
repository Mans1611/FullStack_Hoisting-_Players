import db from '../database'


type Player = {
  id: string
  name: string
  salary: string,
  age:string,
  img:string
}


class playerModel {
  async index(): Promise<Player[]> {
    try {
      const connection = await db.connect()
      const sqlCommand = 'SELECT * FROM Players'
      const result = await connection.query(sqlCommand)
      connection.release()
      return result.rows
    } catch (err) {
      throw new Error(`Error at retrieving Notes ${(err as Error).message}`)
    }
  }
  async create(player:Player):Promise<void>{
    try{
      const sqlCommand =`INSERT INTO players(name,age,salary,img) VALUES($1,$2,$3,$4)`;
      const connection = await db.connect();
      
      connection.query(sqlCommand,[player.name,player.age,player.salary,player.img]);
      connection.release();
    }
    catch(err){
      console.log(err);
    }
  }
}

export default playerModel;
