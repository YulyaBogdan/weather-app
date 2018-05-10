import axios from "axios/index";


const APIXU_API = `http://api.apixu.com`;
const APIXU_ACCESS_TOKEN = '8ecf3775a5ee4ed8929140349180905';

export default {
  fetchWeatherFromApixu: (locale) => {
    return axios.get(`${APIXU_API}/v1/forecast.json?key=${APIXU_ACCESS_TOKEN}&q=${locale}&days=3`)
      .then(function (response) {
        //TODO SWITCH (DAY) Here
        const temperature = response.data.current.temp_c;
        const condition = response.data.current.condition;
        const forecast = response.data.forecast.forecastday;
        return {
          icon: condition.icon,
          text: condition.text,
          temperature,
          tomorrowIcon: forecast[1].day.condition.icon,
          tomorrowText: forecast[1].day.condition.text,
          tomorrowTemp: forecast[1].day.avgtemp_c,
          aftertomorrowIcon: forecast[2].day.condition.icon,
          aftertomorrowText: forecast[2].day.condition.text,
          aftertomorrowTemp: forecast[2].day.avgtemp_c
        }
      })
      .catch(function (error) {
        return {};
      })
  }
}