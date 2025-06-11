import express from 'express';
import cors from 'cors';
import router from './src/config/router.js';
import { connectUsingMongoose } from './src/config/dbConfig.js';
import seedData from './seed.js'; 

const server = express();
const port = 3200;

const corsOptions = {
  origin: "https://dsa-page-sheet.netlify.app",
  methods: "GET,POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
};
server.use(cors(corsOptions));
server.use(express.json());
server.use('/api', router);

server.use((req, res) => {
  res.status(404).json({ status: false, message: 'The requested endpoint does not exist' });
});

server.listen(port, async () => {
  await connectUsingMongoose();  
  await seedData();           
  console.log(`Server running on port ${port}`);
});
