export const GetGif = async (categoria) => {
    const api_key = "6tRUoNr6qRkiKtGv1LrG3qt1wa4X8Qzk";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map(img=>({
      id:img.id,
      title:img.title,
      url:img.images.downsized_medium.url
    }))
    return gifs
  
  };