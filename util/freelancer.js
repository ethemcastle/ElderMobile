import axios from 'axios';

const API_ROUTE = 'http://10.0.2.2:8000/'

export async function getAllFreelancers() {
    const url = `${API_ROUTE}freelancer/sign-up/`
    const response = await axios.get(url)
        .catch((e) => {
            console.log(e);
        });
    return response;
}

export async function getOneFreelancers(id) {
    const url = `${API_ROUTE}freelancer/`
    const response = await axios.get(url)
        .catch((e) => {
            console.log(e)
        });

    return response.data;
}
