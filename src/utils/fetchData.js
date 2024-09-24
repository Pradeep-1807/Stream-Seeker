import axios from "axios";

const BASE_URL = 'https://movies-api14.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key':  import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
  }
};

export const fetchData = async (url)=>{

    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
}
