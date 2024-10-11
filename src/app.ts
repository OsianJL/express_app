import express, { Request, Response, NextFunction} from 'express'
import todoRoutes from './routes/todoRouting'
import {json} from 'body-parser'

const app = express()

app.use(json());
app.use("/todos", todoRoutes);


app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
    resp.status(500).json({message: err.message})
})

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });

