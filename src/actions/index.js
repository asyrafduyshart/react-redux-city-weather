import axios from 'axios';

const API_KEY = '52f13005be140a9dae6e3ffbf6b78d76'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},id`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
    
}