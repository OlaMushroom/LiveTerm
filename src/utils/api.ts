import axios from 'axios';
import config from '../../config.json';

export const getGitHubData = async () => {
  return JSON.stringify(await axios.get(
    `https://api.github.com/users/${config.social.github}`))
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};
