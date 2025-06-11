// import './seed.js';
import express from 'express';
import cors from 'cors';
import router from './src/config/router.js';
import { connectUsingMongoose } from './src/config/dbConfig.js';

const server = express();
const port = 3200;

const corsOptions = {
    origin: "http://dsa-page-sheet.netlify.app",
    methods: "GET,POST",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
};
server.use(cors(corsOptions));

// Middlewares
server.use(express.json());

// Routes
server.use('/api', router);


// 404 Error Handler
server.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: 'The requested endpoint does not exist'
  });
});

server.listen(port, async () => {
  await connectUsingMongoose();
  console.log(`Server running on port ${port}`);
});
