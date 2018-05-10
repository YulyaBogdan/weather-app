import axios from "axios/index";


const APIXU_API = `http://api.apixu.com`;
const APIXU_ACCESS_TOKEN = '8ecf3775a5ee4ed8929140349180905';

export default {
  fetchWeatherFromApixu: (locale) => {
    axios.get(`${APIXU_API}/v1/forecast.json?key=${APIXU_ACCESS_TOKEN}&q=${locale}&days=3`)
      .then(function (response) {
        const temperature = response.data.current.temp_c;
        const condition = response.data.current.condition;
        return {
          icon: condition.icon,
          text: condition.text,
          temperature
        }
      })
      .catch(function (error) {
        return {};
      })
  }
}