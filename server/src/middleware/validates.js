import { config } from "dotenv"
import jwt from "jsonwebtoken"

config()

export const verifyToken = (req, res, next) => {
    try {
        const { token } = req.headers
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.payload = payload
        next()
    } catch (error) {
        console.error(error.message)
        res.status(401).send("Error: invalid token")
    }
};