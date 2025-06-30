import { useEffect, useState } from 'react';
import logo from './logo.svg';
// import './App.css';

let API = "https://fakestoreapi.com/products"

function App() {

  const [data, setData] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [loading, setLoading] = useState(false)
  async function fetchData() {
    setLoading(true)
    try {

      const res = await fetch(API)
      const json = await (res.json())
      setLoading(false)
      console.log(json)
      setData(json)

    } catch (error) {
      setLoading(false)
      console.log("Error while fetching data from API", error)
    }
  }

  useEffect(() => {
    // when components mount data fetch from API
    fetchData()
  }, [])

  // filtered the product -> get product by title.
  let filteredProduct = data.filter((prod) =>
    prod.title.toLowerCase().includes(searchProduct)
  )

  // showing loading -> if loading is true.
  if (loading) return <h1 className='text-5xl text-center m-4 font-bold text-black '>Loading....</h1>

  return (
    <>
      <h1 className='text-5xl text-center m-4 font-bold text-teal-600 '>Masai E-commerce</h1>
      <div className='m-4'>
        Search:<input className='border-2 px-2 w-42 border-black' type="text" placeholder='get product by title...' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value.toLowerCase())} />

      </div>

      <div className="grid grid-cols-4 gap-2 m-2" >
        {filteredProduct.map((prod) => (
          <div className="border-2 border-black p-4 " key={prod.id}>
            <img style={{ width: "200px" }} src={prod.image} alt={prod.title} />
            <p><b>Title:</b> {prod.title}</p>
            <p><b>Price:</b> ₹ {prod.price}/-</p>
            <p>`{prod.description}</p>
          </div>
        ))
        }
      </div>
    </>
  );
}

export default App;
