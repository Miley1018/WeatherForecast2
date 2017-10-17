import axios from 'axios';

const API_KEY='3dc4576c0d384b1c8b0bf075dedbd549';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`;
export const FETCH_WEATHER = 'fetchweather';

const Fetchweather=(city)=>{
    const url = `${ROOT_URL}&q=${city},us`;
    const request=axios.get(url);
    console.log(request);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}

export default Fetchweather;