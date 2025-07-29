import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Endpoints
app.get('/', (req: Request, res: Response) => {
    // Send Hello
    res.send('Home')
});

app.get('/hello', (req: Request, res: Response) => {
    // Send Hello
    res.send('Hello World')
});

// Execute APP and listen requests
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
