import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [exercice, setExercice] = useState("")
  const [sets, setSets] = useState(0)
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)
 
  useEffect(() => {
    axios.get("http://localhost:3000/api/items/")
      .then((res)=>{
        setItems(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }, [refresh])
  

  const addOne = (exercice, sets, reps, weight) =>{
    axios.post('http://localhost:3000/api/items/post', {exercice, sets, reps, weight})
    .then(res =>{
      setRefresh(!refresh)
    })
    .catch(err =>{
      console.error(err)
    })
  }
  
  

  return (
    <div>
      <h1 id='track'> WORKOUT TRACKER</h1>
      <List items={items} refresh={refresh} setRefresh={setRefresh} /><br></br>
      <div>
        <input type='text' placeholder='add exercice' onChange={(e)=>{setExercice(e.target.value)}}/><br></br>
        <input type='text'  placeholder='add reps' onChange={(e)=>setReps(e.target.value)}/><br></br>
        <input type='text' placeholder='add sets' onChange={(e)=>setSets(e.target.value)}/><br></br>
        <input type='text' placeholder='add weight' onChange={(e)=>setWeight(e.target.value)}/><br></br>
        <button type='botton' onClick={()=>addOne(exercice, sets, reps, weight)}>add workout</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
