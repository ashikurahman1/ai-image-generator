import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

app.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;

  const response = await fetch(
    'https://api-inference.huggingface.co/models/your-model',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const buffer = await response.arrayBuffer();
  res.send(Buffer.from(buffer));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
