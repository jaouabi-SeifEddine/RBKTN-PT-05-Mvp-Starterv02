import React from 'react';
import axios from 'axios';

const ListItem = ({item, theRefresh, theSetRefresh}) => {
  const deleteOne = (id) =>{
    axios.delete(`http://localhost:3000/api/items/${id}`)
    .then (res=>{
        theSetRefresh(!theRefresh)
        console.log(res)
    })
    .catch(err =>{
      console.error(err)
    })
    }

    const updateSets = (id) =>{
      const mod = document.getElementById('set').value
      axios.put(`http://localhost:3000/api/items/${id}`, {sets : mod})
      .then (res =>{
        theSetRefresh(!theRefresh)
          console.log(res)
      })
      .catch(err =>{
        console.error(err)
      })
    }
    const updateReps = (id) =>{
      const mod = document.getElementById('rep').value
      axios.put(`http://localhost:3000/api/items/${id}`, {reps : mod})
      .then (res =>{
        theSetRefresh(!theRefresh)

          console.log(res.data)
      })
      .catch(err =>{
        console.error(err)
      })
    }
    const updateWeight = (id) =>{
      const mod = document.getElementById('wei').value
      axios.put(`http://localhost:3000/api/items/${id}`, {weight : mod})
      .then (res =>{
        theSetRefresh(!theRefresh)
          console.log(res)
      })
      .catch(err =>{
        console.error(err)
      })
    }

  return (
  <div id='toBorder'>
    <p className='mf'> this is a { item.exercice } exercice</p>
    <p className='mf'> you do { item.reps } reps for {item.sets} sets </p>
    <p className='mf'> impressively, you do all those sets and reps with a weight of { item.weight } kg</p>
    <button type ="button" onClick={()=>deleteOne(item._id)}>delete</button>
    <p className='mf'> i want to see that weight increase next week champ </p>
    <p className='mf'> you can emplement those changes down here</p>
    <input id='set' type='text' placeholder='put in the new sets record '/><button type='button' onClick={() =>updateSets(item._id)}>update</button>
    <br></br>
    <input id='rep' type='text' placeholder='put in the new reps record '/><button type='button'  onClick={() =>updateReps(item._id)}>update</button>
    <br></br>
    <input id='wei' type='text' placeholder='put in the new weight record '/><button type='button'  onClick={() =>updateWeight(item._id)}>update</button>
    <br></br>
    
  </div>
  )
}

export default ListItem;