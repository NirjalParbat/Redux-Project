import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

const [text, setText] = useState('')

const dispatch = useDispatch()


const submitHandler = (e) => {
e.preventDefault();
dispatch(setQuery(text))
 setText('')
}


  return (
    <div>
        <form onSubmit={(e)=> {
            submitHandler(e)
           
        }} 
        className='flex bg-gray-900 p-10 gap-5'>
            <input type="text"
            required
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
             placeholder='Search Anything...' 
             className='w-full border-2 px-4 py-2 text-xl rounded outline-none'/>
            <button  className='active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar