import express from "express";
import { 
    getBarang,
    addBarang,
    updateBarang,
    deleteBarang
} from "../controllers/barang.js";

const router = express.Router()

router.get("/", getBarang)
router.post("/", addBarang)
router.put("/:id", updateBarang)
router.delete("/:id", deleteBarang)

export default router