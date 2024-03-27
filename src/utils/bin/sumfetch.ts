import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
    <u><a href="${config.repo}" target="_blank">Github repo</a></u>
    <u><a href="https://github.com/${config.social.github}" target="_blank">Github profile</a></u>
    -----------
     DONATE:
    - <u><a href="${config.donate_urls.buymeacoffee}" target="_blank">buymeacoffee</a></u>
  `;
}

export default sumfetch;
