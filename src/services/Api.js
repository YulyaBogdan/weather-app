import axios from 'axios';

const MAPBOX_API = `https://api.mapbox.com`;
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default {
  fetchCityFromMapbox: (locale) => {
    return axios.get(`${MAPBOX_API}/geocoding/v5/mapbox.places/${locale}.json`,
      {
        params: {
          access_token: MAPBOX_ACCESS_TOKEN
        }
      })
      .then(function (response){
        const location = response.data.features[0].center;
        const city = response.data.features[0].place_name;
        return {
          city,
          location
        };
      })
      .catch(function (error) {
        return {};
      })
  }
}