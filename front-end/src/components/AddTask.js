import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [showDesc, setShowDesc] = useState(false)
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title) {
      alert('Please Add Task')
      return
    }
    
    onAdd({ title, day, showDesc, description })
    setTitle('')
    setDay('')
    setShowDesc(false)
    setDescription('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='Add Task' 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        ></input>
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input 
          type='text' 
          placeholder='Add Day and Time'
          value={day}
          onChange ={(e) => setDay(e.target.value)} 
        ></input>
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input 
          type='Text' 
          value={description}
          onChange ={(e) => setDescription(e.target.value)} 
        ></input>
        <input type='submit' value='Save Task' className='btn btn-block'/>
      </div>
    </form>
  )
}

export default AddTask
