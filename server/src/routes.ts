import express from "express"

import ClassesController from "./controller/ClassesController"
import ConnectionController from "./controller/ConnectionController"
import UserController from "./controller/UserController"

const routes = express.Router()

const classesController = new ClassesController()
const connectionsController = new ConnectionController()
const usersController = new UserController()

routes.get("/users", usersController.index)

routes.post("/classes", classesController.create)

routes.get("/classes", classesController.index)

routes.get("/classesAll", classesController.getclasses)

routes.get("/connections", connectionsController.index)

routes.post("/connections", connectionsController.create)

export default routes
