import { client } from "./client";

const API = {
    async getPosts() {
        const response = await client.getEntries();
        return response.items.map(posts => posts.fields);
    }
}

export const {
    getPosts
} = API;