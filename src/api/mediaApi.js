import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY


// normalization


  
export async function fetchPhotos(query, page,       per_page=20){
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  });
   return res.data
    
}

 
export async function fetchVideos(query,page=1,per_page=15) {
     const res = await axios.get('https://api.pexels.com/videos/search', {
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${PEXELS_KEY}`}
  });
   return res.data
}
 

 
  export const fetchGIF = async () => {
    
        const res = await axios.get("https://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: GIPHY_KEY,
                limit: 12,
            },
        });
       return res.data;
      
    
  }


