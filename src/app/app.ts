import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

// parser
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!! How are you doing, men mamur betaa?');
});

app.post('/', (req: Request, res: Response) => {
  res.json({ message: "Successfully received data" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
