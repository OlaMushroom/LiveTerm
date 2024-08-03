import axios from 'axios';
const user_id = '608876620417335337';
const format = {
  urlTemplate: (name: string, url: string) =>
    `<u><a class="text-light-blue dark:text-dark-blue underline" href="${url}" target="_blank">${name}</a></u>\n`,
  osu: function (details?: string, state?: string) {
    let str = '';
    str += state !== (null || undefined) ? `\t${state}\n` : '';
    str +=
      state !== ('Idle' || 'AFK')
        ? details !== (null || undefined)
          ? `\tBeatmap: ${details}\n`
          : ''
        : '';
    return str;
  },
  vscode: function (details?: string, state?: string) {
    let str = '';
    str += details !== (null || undefined) ? `\t${details}\n` : '';
    str += state !== (null || undefined) ? `\t${state}\n` : '';
    return str;
  },
};
export const getActivities = async () => {
  try {
    const { data } = await axios.get(
      `https://api.lanyard.rest/v1/users/${user_id}`,
    );
    const activities = data['data']['activities'];
    if (activities.length > 0) {
      let str = '';
      for (const index of activities) {
        str += `#${activities.indexOf(index) + 1} - `;
        switch (index['name']) {
          case 'osu!':
            str +=
              format.urlTemplate(index['name'], 'https://osu.ppy.sh') +
              format.osu(index['details'], index['state']);
            break;
          case 'Spotify':
            break;
          case 'Visual Studio Code':
            str +=
              format.urlTemplate(
                index['name'],
                'https://code.visualstudio.com/',
              ) + format.vscode(index['details'], index['state']);
            break;
          default:
            str += `${index['name']}\n`;
            break;
        }
      }
      return str;
    }
    return 'No activity.';
  } catch (error) {
    return error;
  }
};
export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};
/*
const response = await (await fetch(`https://api.lanyard.rest/v1/users/${user_id}`)).json();
const activities = response['data']['activities'];
if (activities.length > 0) {
  if (activities.length > 1 || activities[0]['name'] !== 'Spotify') {
    document.getElementById("lanyard-profile-readme").innerHTML = `
      <img alt="lanyard-profile-readme" src="https://lanyard.cnrad.dev/api/${user_id}?theme=dark&bg=1a1b27&hideProfile=true">
    ` * &idleMessage=Whacha%20lookin'%20at%20(ﾉ*ФωФ)ﾉ
  }
  const now_playing = response['data']['spotify'];
  if (now_playing !== null) {
    document.getElementById("card-spotify").innerHTML = `
      <div class="card w-96 image-full">
        <figure><img src="${now_playing['album_art_url']}" alt="Album art"></figure>
        <div class="card-body">
          <h1 class="card-title text-2xl">Now playing</h1>
          <a class="link-hover text-xl" href="https://open.spotify.com/track/${now_playing['track_id']}">${now_playing['song']}</a>
          <p>${now_playing['artist']}</p>
        </div>
      </div>
    `
  }
}
*/
