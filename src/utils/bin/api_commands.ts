// List of commands that require API calls
import { getActivities, getWeather } from '../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

export const activities = async (args?: string[]): Promise<string> => {
  const activities = await getActivities();
  return activities;
};