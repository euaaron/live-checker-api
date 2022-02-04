import { Router } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const SwaggerRoute = Router();

/**
 * @openapi
 * /:
 *  get:
 *   description: Live API documentation - powered by OpenAPI specification
 *   responses:
 *    '200':
 *      description: returns the OpenAPI specification of this API
 */
SwaggerRoute.use("/", swaggerUi.serve);
SwaggerRoute.use("/", swaggerUi.setup(swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Live API",
      version: "1.0.0",
      description: "Live API documentation - powered by OpenAPI specification",
      contact: {
        name: "Aaron Carneiro",
        email: "liveapi@aaroncarneiro.com",
        url: "https://aaroncarneiro.com"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    basePath: "/",
  },
  apis: [
    "src/routes/root/swagger.route.mjs",
    "src/routes/youtube/youtube.route.mjs"
  ]
})));

export default SwaggerRoute;
