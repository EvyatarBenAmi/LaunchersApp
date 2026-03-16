import supabase from "../src/db/configSupabase";

const tableLaunchers = supabase.from("tableLaunchers")

export async function returnAllLauncers() {
    try {
        const { data, error } = await tableLaunchers
            .select()
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function returnLauncherById(numId) {
    try {
        const { data, error } = await tableLaunchers
            .select()
            .eq("id", numId)
        if (error) throw new Error(error)
        return data[0]
    } catch (error) {
        console.log(error.message)
    }
};

export async function insertLauncherInDB(city, rocketType, latitude, longitude, name) {
    try {
        const { error } = await tableLaunchers
            .insert({ city: city, rocketType: rocketType, latitude: latitude, longitude: longitude, name: name })
        if (error) throw new Error(error)
    } catch (error) {
        console.log(error.message)
    }
};

export async function deletLauncherfromDB(numId) {
    try {
        await tableLaunchers
        .delete()
        .eq("id", numId)
    } catch (error) {
        if (error) throw new Error(error)
    }
};