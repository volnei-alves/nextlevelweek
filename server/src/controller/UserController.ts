import { Request, Response } from "express"
import db from "../database/connection"

export default class ClassesController {
    async index(request: Request, response: Response) {
        const users = await db("users")

        return response.json(users)
    }
}
