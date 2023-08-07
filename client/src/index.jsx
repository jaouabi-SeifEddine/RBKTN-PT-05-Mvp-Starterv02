import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
// import { Cloudinary } from '@cloudinary/url-gen/index.js'
import axios from 'axios'
import List from './components/List.jsx'
// import { image } from '@cloudinary/url-gen/qualifiers/source.js'


const App = () => {
  const [items, setItems] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [exercice, setExercice] = useState("")
  const [sets, setSets] = useState(0)
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)

  // const prjCld = new Cloudinary({
  //   cloud : {
  //     cloudName: dglagtmn9
  //   }
  // })
  // const formData = new FormData()
  // formData.append("api_key", '')
  // formData("file", image)
  // formData.append("public_id", "progress")
  // formData.append("upload_preset", uploadPreset)
//   const uploadPhoto = () =>{ 
//   axios
//   .post("CLOUDINARY_URL=cloudinary://927252493869115:edP3BRRKJosmb385OqErLlRpghg@dglagtmn9", formData)
//   .then((res) =>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.error(err)
//   })
// }
 
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
        {/* <p>need to keep track of your progress? make sure to upload your progress photos </p><button type='button' onClick={()=>uploadPhoto}>upload</button> */}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
