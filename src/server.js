import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import listEndpoints from "express-list-endpoints"

import usersRouter from "./services/users/index.js"
import { forbiddenHandler, unAuthorizedHandler, catchAllHandler } from "./errorHandlers.js"
const server = express()

const port = process.env.PORT || 3001

// ************************* MIDDLEWARES *****************

server.use(cors())
server.use(express.json())

// ************************* ROUTES *********************

server.use("/users", usersRouter)

// ************************* ERROR HANDLERS ******************

server.use(unAuthorizedHandler, forbiddenHandler, catchAllHandler)

console.table(listEndpoints(server))

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
  })
})
