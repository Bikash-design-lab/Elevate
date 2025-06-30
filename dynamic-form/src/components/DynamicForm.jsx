import React from 'react'
import { useState } from 'react'
let userData = []
const DynamicForm = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[age, setAge] = useState()
    const[gender, setGender] = useState("Male")
    const[subs, setsubs] = useState(false)
    const[data, setData] = useState([])

    const handleSubmit=(e)=> {
        e.preventDefault()
        setData([...data, {name,email,age,gender,subs}])
        // let id = Date.new()
        // userData.push({id, ...data})
        console.log(data)
    }

  return (
    <div>
      <h1>Form </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
            <b>Name: </b> <input className="name" type="text" placeholder='enter name' required minLength={3}  onChange={(e)=>{setName(e.target.value)}} />
        </label> <br />
         <label htmlFor="email">
            <b>Email: </b><input className="email" type="text" placeholder='email@masaischool.com' required onChange={(e)=>{setEmail(e.target.value)}} />
        </label> <br />
         <label htmlFor="Age">
            <b>Age: </b> <input className="age" type="number" placeholder='enter age'  min={18} max={100}  onChange={(e)=>{setAge(e.target.value)}}  />
        </label> <br />
         <label htmlFor="gender">
            <b>Gender: </b> <select  onChange={(e)=>{setGender(e.target.value)}} className="gender" required>
                <option value="" disabled>select-gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </label> <br />
         <label htmlFor="subscribe">
            <b>subscribe to newsletter: </b> <input className="subscribe" type="checkbox" placeholder='Subscribe to newsletter' required onChange={(e)=>{setsubs(e.target.checked)}} />
        </label> <br />
        <input type="submit" placeholder='submit' />
      </form>
    </div>
  )
}

export default DynamicForm
