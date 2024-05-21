import swaggerJSDoc, { SwaggerDefinition, Options } from 'swagger-jsdoc'

const swaggerDefinition: SwaggerDefinition = {
    info: {
        title: `Starter Kit Swagger`,
        version: `3.0`,
        description: `Swagger - A sample doc for all apis for starter kit swagger`,
    },
}

const options: Options = {
    swaggerDefinition,
    apis: ['src/api-swagger.yaml'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec