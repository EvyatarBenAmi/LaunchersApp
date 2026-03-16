import express from "express"
import cors from "cors"
import routerLauncher from "./router/launcherR.js"

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/launchers",routerLauncher)


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})