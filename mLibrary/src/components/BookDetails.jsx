import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import {getBookRecommendations} from "../hooks/useGemini"

const BookDetails = () => {
  const[bookData, setBookData] = useState(null)
  const[recomendation, setRecommendation] = useState([])
  const {bookId} = useParams()

  async function fetchData(){
    try {
      const res = await fetch(`https://students-3e1bf-default-rtdb.firebaseio.com/books/${bookId}.json`)
      const data = await res.json()
      setBookData(data)
    } catch (error) {
      console.log("Error while getting data from an API",error)
    }
  } 

  useEffect(()=>{
    fetchData()
  },[bookId])

  const navigate = useNavigate()

  useEffect(()=>{
    if(bookData){
      getBookRecommendations(bookData.title, bookData.author).then(setRecommendation)
    }
  },[bookData])
  
  if (!bookData){
    return <h2>Loading book details...</h2>
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Book Details</h1>
      <button style={{margin:"10px" , cursor:"pointer"}} onClick={()=>navigate(-1)}> Go back</button>
      <div
        key={bookData.id}
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={bookData.cover}
          alt={bookData.title}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />
        <p><strong>Title:</strong> {bookData.title}</p>
        <p><strong>Genre:</strong> {bookData.genre}</p>
        <p><strong>Description:</strong> {bookData.description}</p>
        <p><strong>Price:</strong> ₹{bookData.price}</p>
        <p><strong>Author:</strong> {bookData.author}</p>
        <p><strong>Rating:</strong> {bookData.rating}</p>
        <p><strong>Reviews:</strong> {bookData.reviews}</p>
        <p><strong>Year:</strong> {bookData.year}</p>
      </div>
      <div>
        <h1 style={{color:"Blue", textAlign:"center"}}>AI recomendation books.</h1>
        {recomendation.map((rec,ind)=>(
          <div key={ind}>
              <p><b> {ind+1}.Title_Recomend</b>: {rec.title }</p>
              <p><b> {ind+1}. Author_Recomend</b>: {rec.author}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BookDetails

