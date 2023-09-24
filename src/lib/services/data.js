const BASE_URL = 'https://my-json-server.typicode.com/HuyVQ18411c/personal-profile-data'

async function getResource(resource) {
    const response = await fetch(`${BASE_URL}/${resource}`);
    if(response.ok){
        return await response.json();
    }
    else {
        throw new Error(response.statusText);
    }
}

export { getResource };
