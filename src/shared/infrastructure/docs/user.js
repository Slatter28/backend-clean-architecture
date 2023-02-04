users.js
/**
 * @swagger
 * components:
 *  schemas:
 *     User:
 *      type: object
 *      properties:
 *          id:
 *             type: integer
 *             description: The auto-generated id of the user 
 *          name:
 *             type: string
 *             description: The name of the user
 *          email:
 *             type: string
 *             description: The email of the user
 *          password:
 *             type: string
 *             description: The password of the user
 *          is_active:
 *             type: boolean
 *             description: The status of the user
 *          google:
 *             type: boolean
 *             description: The status of the user
 *      required:
 *        - id
 *        - name
 *        - email
 *        - password
 *        - is_active
 *        - google
 *      example:
 *       id: 1
 *       name: John Snow
 *       email: example@example.com
 *       password: 123456
 *       is_active: true
 *       google: false
 * 
 */

/** 
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *         200:
 *           description: The list of user
 *           content:
 *              application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 * 
 */