import { config } from "dotenv";
import { deletUserByIdfromDB, findUserByName, findUserByNameAndPassword, findUserByType, insertUserInDB, returnAllUsersFromDB, returnUserByIdFromDB, updateLastLogin, updateUserInDB } from "../DAL/CRUDusers.js"
import jwt from "jsonwebtoken"

config()

export const addNewUser = async (req, res) => {
    try {
        const { user } = req.payload
        if (user.user_type !== "Admin") return res.status(401).send("Error: This user type is not authorized.")

        const { name, password, email, userType } = req.body

        const resoltName = await findUserByName(name)
        console.log(resoltName);
        if (resoltName) return res.status(400).send("Error: invalid name")

        const resoltType = await findUserByType(userType)
        if (resoltType) return res.status(400).send("Error: This type already exists")

        await insertUserInDB({ name, password, email, userType })
        res.send("Inserted successfully")

    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const loginUser = async (req, res) => {
    try {
        const { name, password } = req.body
        const resolt = await findUserByNameAndPassword(name, password)
        if (!resolt) res.status(401).send("Error: Incorrect username or password!")

        const { id, username, user_type } = resolt
        const token = jwt.sign({ user: { id, username, user_type } }, process.env.JWT_SECRET, { expiresIn: "1d" })

        await updateLastLogin({ id })
        res.send(token)

    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const updateUser = async (req, res) => {
    try {
        const { user } = req.payload
        if (user.user_type !== "Admin") return res.status(401).send("Error: This user type is not authorized.")

        const { id, password, email } = req.body
        await updateUserInDB({ id, password, email })
        res.send("Updated successfully")

    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const deleteUser = async (req, res) => {

    try {
        const { user } = req.payload
        if (user.user_type !== "Admin") return res.status(401).send("Error: This user type is not authorized.")

        const { id } = req.params
        const resolt = await returnUserByIdFromDB(id)
        if (!resolt) return res.status(400).send("Error: id is not found")

        await deletUserByIdfromDB(id)
        res.send("Deleted successfully")

    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const getLoginUser = async (req, res) => {
    try {
        const { user } = req.payload
        const resolt = await returnUserByIdFromDB(user.id)
        if (!resolt) return res.status(400).send("Error: id is not found")
        res.send(resolt)
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const { user } = req.payload
        if (user.user_type !== "Admin") return res.status(401).send("Error: This user type is not authorized.")

        const resolt = await returnAllUsersFromDB()
        res.send(resolt)
    } catch (error) {
        console.log(error.message)
        res.send(`Error: ${error.message}`)
    }
};