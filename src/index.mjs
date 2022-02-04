import cors from 'cors';
import express from 'express';
import SwaggerRoute from './routes/root/swagger.route.mjs';
import YoutubeRoute from './routes/youtube/youtube.route.mjs';

const api = express();
const PORT = process.env.PORT || 3000;

api.use(cors());
api.use(express.json());

api.use(YoutubeRoute);
api.use(SwaggerRoute);

api.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.log(err);
});

export default api;
