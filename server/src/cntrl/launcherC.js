import { deletLauncherByIdfromDB, insertLauncherInDB, returnAllLauncersFromDB, returnLauncherByIdFromDB } from "../dal/crud.js"


export const returnAllLaunchrs = async (req, res) => {
    try {
        const resolt = await returnAllLauncersFromDB()
        res.send(resolt)
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const returnLauncherById = async (req, res) => {
    try {
        const { id } = req.body
        const resolt = await returnLauncherByIdFromDB(id)
        if (!resolt) res.send("id is not found!")
        res.send(resolt)
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const insertLauncher = async (req, res) => {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        await insertLauncherInDB(city, rocketType, latitude, longitude, name)
        res.send("inserted")
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const deletLauncherById = async (req, res) => {
    try {
        const { id } = req.params
        const resolt = await returnLauncherByIdFromDB(id)
        if (!resolt) return res.send("id is not found!")
        await deletLauncherByIdfromDB(id)
        res.send("deleted")
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};