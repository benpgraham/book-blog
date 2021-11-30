import { client } from "./client";

const API = {
    async getPosts() {
        const response = await client.getEntries();
        return response.items;
    }
}

export const {
    getPosts
} = API;