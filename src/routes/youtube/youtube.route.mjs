import { Router } from "express";
import { handleRequest } from "./service/youtube.mjs";

const YoutubeRoute = Router();

/**
 * @openapi
 * /youtube:
 *  get:
 *   description: Checks if a YouTube channel is live
 *   parameters:
 *   - name: type
 *     in: query
 *     description: Can be channel or user
 *     required: true
 *     schema:
 *      type: string
 *   - name: id
 *     in: query
 *     description: The id of the channel or user
 *     required: true
 *     schema:
 *      type: string
 *  responses:
 *   '200':
 *    description: Returns a object with the status of the channel and its url
 *    schema:
 *     type: object
 *     properties:
 *      url: string
 *      status: boolean
 */
YoutubeRoute.get('/youtube', (req, res, next) => {
  if(!req.query.type || !req.query.id) {
    next();      
  }
  handleRequest(res);
});

YoutubeRoute.get('/youtube', (req, res, next) => {
  if(!req.body.type || !req.body.id) {
    next();
  }
  handleRequest(res);
});

YoutubeRoute.get('/youtube', (req, res, next) => {
  res.status(400).send('You should specify a type and an id');
});

export default YoutubeRoute;
