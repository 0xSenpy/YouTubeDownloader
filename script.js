const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c34559ca92msh815d4b12649cd36p1fa3a5jsn6de9f4448099',
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
};

const playlistURL = document.getElementById('playlistLink')

const findPlaylistID = (URL) => {
    if (URL.includes('=')) {
      return URL.substring(URL.indexOf('=') + 1)
    } else {
      return URL.substring(URL.lastIndexOf('/') + 1)
    }
  }


const getVideo = async () => {
    const URL = String(playlistURL.value)
    const playlistID = findPlaylistID(URL)
    const res = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${playlistID}`, options)
    const data = await res.json()
    const downloadURL = data.formats[2].url
    window.open(downloadURL);
}
