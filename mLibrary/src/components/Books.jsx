import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

let API = "https://students-3e1bf-default-rtdb.firebaseio.com/books.json"

const Books = () => {
    const navigate = useNavigate()
    const[bookData, setBookData] = useState([])
    const[copiedData, setCopiedData] = useState([])
    const[sortVal, setSortVal] = useState("")
    const [loading, setLoading] = useState(false)
    async function fetchAPI(){
        setLoading(true)
        try {
            const res = await fetch(`https://students-3e1bf-default-rtdb.firebaseio.com/books.json`)
            const data = await res.json()
            setBookData(data)
            setCopiedData(data)
            setLoading(false)
            console.log(data)
        } catch (error) {
            setLoading(false)
            console.log("Error while fetching data from API",error)
        }
    }

    useEffect(()=>{
        fetchAPI()
    },[])

    useEffect(()=>{
        let sorted = [...bookData]
        if(sortVal === "l-h"){
         sorted.sort((a,b)=> a.price - b.price)
        }
        if(sortVal === "h-l"){
         sorted.sort((a,b)=> b.price - a.price)
        }
        setCopiedData(sorted)

    },[sortVal, bookData])
 
    

    if(loading) return <h1 style={{textAlign:"center"}}>Loading...</h1>
    return (
        <>
          <h1 style={{textAlign:"center"}}>Masai Library</h1>
          <div>SortByPrice:
            <select value={sortVal} onChange={(e)=>{setSortVal(e.target.value)}}>
                <option value="" disabled>All</option>
                <option value="l-h">low-high</option>
                <option value="h-l">high-low</option>
            </select>
          </div>
        <div  style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            padding: "20px",
        }}>

        {
            copiedData.map((book)=>(
                <div style={{border:"2px solid black", textAlign:"center", margin:"10px"}} key={book.id}>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Price: {book.price}</p>
                    <button style={{marginBottom:"10px", cursor:"pointer"}} onClick={()=>{navigate(`/${book.id}`)}}>More Details</button>
                </div>
                )
            )
        }
    </div>   
          </>
  )
}

export default Books
