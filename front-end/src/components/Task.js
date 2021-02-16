import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  const [showDesc, setShowDesc] = useState(false)

  return (
    <div 
      className='task' 
      onDoubleClick={() => setShowDesc(!showDesc)}>
      <h3>
        {task.title}{' '}
        <FaTimes style={{ 
          color: 'red',
          cursor: 'pointer'
        }}
        onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
      {showDesc && <p>{task.description}</p>}
    </div>
  )
}

export default Task
