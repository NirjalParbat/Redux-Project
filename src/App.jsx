import { fetchPhotos, fetchVideos, fetchGIF } from "./api/mediaApi"

const App = () => {


  return (
    <div className="h-screen w-full bg-gray-950  text-white">
    <button className="m-4 bg-gray-600 p-4 rounded-3xl" onClick={async () => {
     const data =await fetchPhotos('cat')
     console.log(data.results);
     
    }}>Get Photos</button>

    <button 
    className="m-4 bg-gray-600 p-4 rounded-3xl"
    onClick={async () => {
     const data =await fetchVideos('cat')
     console.log(data.videos);
     
    }}>Get Videos</button>

    <button 
    className="m-4 bg-gray-600 p-4 rounded-3xl"
    onClick={async () => {
     const data =await fetchGIF('cat')
     console.log(data.data);
     
    }}>Get GIF</button>
    </div>
  )
}

export default App