// // List of commands that require API calls

import { getGitHubData } from '../api';
import { getWeather } from '../api';

export const githubdata = async (args: string[]): Promise<string> => {
  const data = await getGitHubData();
  return data;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
