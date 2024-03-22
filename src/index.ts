import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.use(express.json());

// Define your routes here

app.get('/', (_: Request, res: Response) => {
    res.send('Hello, World! Jaime landa');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});