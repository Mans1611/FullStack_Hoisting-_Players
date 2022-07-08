import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import api from './routes/apiRoute';
import config from './config'
import bodyParser from 'body-parser';
const PORT = config.port 
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

// add routing for /api path
app.use('/api', api)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })  
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
