import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos, fetchVideos, fetchGIF} from '../api/mediaApi'
import { setLoading, setError, setResults, clearResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'




const ResultGrid = () => {

const dispatch = useDispatch()
const {query, activeTab, results, loading, error} = useSelector((store) => store.search)




useEffect(function(){
    if(!query) return 

    const getData = async ()=> {
    try{
        dispatch(setLoading())
let data = []
    if(activeTab == 'photos'){
         let response = await fetchPhotos(query)
         data = response.results.map((item) => ({
            id:item.id,
            type:'photo',
            title:item.alt_description,
            thumbnail:item.urls.small,
            src:item.urls.full

         }))
    }

    if(activeTab == 'videos'){
       let response = await fetchVideos(query)
       data = response.videos.map((item)=>({
            id:item.id,
            type:'video',
            title:item.user.name || 'video',
            thumbnail:item.image,
            src:item.video_files[0].link
       }))
    }

    if(activeTab == 'gif'){
         let response = await fetchGIF(query)
         data = response.data.map((item)=> ({
            id:item.id,
            type:'gif',
            title:item.title,
            thumbnail:item.images.downsized_small,
            src:item.url
            
         }))
    }
   dispatch(setResults(data))
    }catch(err){
dispatch(setError(err.message))
    }

    
}
    getData()
}, [query, activeTab])

if(error) return <h1>Error</h1>
if(loading) return <h1>Loading...</h1> 

  return (
    <div>
    {results.map((item, idx)=>{
return (
    <div key={idx}>

    </div>
    
) 
    
    })}
    </div>
  )
}

export default ResultGrid