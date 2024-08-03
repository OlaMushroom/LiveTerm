//import { DateTime, Interval } from 'luxon';
import * as bin from './index';
import config from '../../../config.json';
export const banner = (
  args?: string[],
): string => `Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
export const help = async (args: string[]): Promise<string> => {
  //const commands = Object.keys(bin).sort().join(', ');
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
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};
export const socials = async (args: string[]): Promise<string> => `
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://bento.me/${config.social.bento}" target="_blank">Bento</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">Github</a></u>
`;
export const donate = async (args: string[]): Promise<string> => `
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.buymeacoffee}" target="_blank">buymeacoffee</a></u>
`;
/*
export const birthday = async (args: string[]): Promise<string> => {
  const today = DateTime.now();
  const thisYear = DateTime.fromISO(`${today.year}-12-02`);
  if (today.hasSame(thisYear, 'day')) {
    return `
    ${thisYear.toFormat("cccc',' dd LLLL y")}
    Happy birthday! 🥳
    `;
  }
  const bday =
    today.startOf('day') < thisYear.startOf('day')
      ? thisYear
      : thisYear.plus({ years: 1 });
  const interval = Interval.fromDateTimes(today, bday);
  const duration =
    interval.length() >= 86400000
      ? `${Math.round(interval.length('days'))} days`
      : `${Math.round(interval.length('seconds'))} seconds`;
  return `
    ${bday.toFormat("cccc',' dd LLLL y")}
    In ${duration}
  `;
};
*/
export const echo = async (args: string[]): Promise<string> => args.join(' ');
export const ls = async (args: string[]): Promise<string> => `a
bunch
of
fake
directories`;
export const cd = async (
  args: string[],
): Promise<string> => `Unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
export const vi = async (args: string[]): Promise<string> =>
  `woah, you still use 'vi'? just try 'vim'.`;
export const vim = async (args: string[]): Promise<string> =>
  `'vim' is so outdated. how about 'nvim'?`;
export const nvim = async (args: string[]): Promise<string> =>
  `'nvim'? too fancy. why not 'emacs'?`;
export const emacs = async (args?: string[]): Promise<string> =>
  `you know what? just use vscode.`;
export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};
