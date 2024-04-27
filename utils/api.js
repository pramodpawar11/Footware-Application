import { STRAPI_API_TOKEN, API_URL } from "./url";

export const fetchApiData = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN
        }
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json(); // Await the JSON parsing
    return data;
};
