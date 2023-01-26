import express from "express"
import barangRoutes from "./routes/barang.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", barangRoutes)

app.listen(8800)