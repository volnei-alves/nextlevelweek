import express from "express"

const routes = express.Router()

routes.get("/", (req, res) => {
    res.json("recebendo usuarios")
})

export default routes
