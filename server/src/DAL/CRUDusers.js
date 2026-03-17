import supabase from "../db/configSupabase.js";

const users = supabase.from("usersLaunchers")

export async function insertUserInDB({ name, password, email, userType }) {
    try {
        const { error } = await users
            .insert({ username: name, password: password, email: email, user_type: userType })
        if (error) throw new Error(error)
    } catch (error) {
        console.log(error.message)
    }
};

export async function updateUserInDB({ id, password, email }) {
    try {
        const { error } = await users
            .update({ password: password, email: email })
            .eq("id", id)
        if (error) throw new Error(error)
    } catch (error) {
        console.log(error.message)
    }
};

export async function deletUserByIdfromDB(id) {
    try {
        await users
            .delete()
            .eq("id", id)
    } catch (error) {
        console.log(error.message)
    }
};

export async function updateLastLogin({ id }) {
    try {
        const { error } = await users
            .update({ last_login: new Date() })
            .eq("id", id)
        if (error) throw new Error(error)
    } catch (error) {
        console.log(error.message)
    }
};

export async function returnUserByIdFromDB(id) {
    try {
        const { data, error } = await users
            .select()
            .eq("id", id)
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function findUserByName(name) {
    try {
        const { data, error } = await users
            .select()
            .eq("username", name)
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function findUserByType(type) {
    try {
        const { data, error } = await users
            .select()
            .eq("user_type", type)
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function findUserByNameAndPassword(name, password) {
    try {
        const { data, error } = await users
            .select()
            .eq("username", name)
            .eq("password", password)
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function returnAllUsersFromDB() {
    try {
        const { data, error } = await users
            .select()
        if (error) throw new Error(error)
        return data
    } catch (error) {
        console.log(error.message)
    }
}