// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { DateTime, Interval } from "luxon";
//import dayjs from 'dayjs';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 10 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.buymeacoffee}" target="_blank">buymeacoffee</a></u>
`;
};

// Contact
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const birthday = async (args: string[]): Promise<string> => {
  const today = DateTime.now();
  const thisYear = DateTime.fromISO(`${today.year}-12-02`);
  if (today.hasSame(thisYear, 'day')) {
    return `
    ${thisYear.toFormat("cccc',' dd LLLL y")}
    Happy birthday! 🥳
    `
  }

  const bday = today.startOf('day') < thisYear.startOf('day') ? thisYear : thisYear.plus({ years: 1 });
  const interval = Interval.fromDateTimes(today, bday);
  const duration = interval.length() >= 86400000 ? `${Math.round(interval.length('days'))} days` : `${Math.round(interval.length('seconds'))} seconds`;
  return `
    ${bday.toFormat("cccc',' dd LLLL y")}
    In ${duration}
  `;
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
