import { useState } from 'react'
import Header from  './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Doctors Appointment',
      day: 'Feb 5th at 2:00PM',
      description: 'Meet Dr. Green at Sansum Clinic for a physical'
    },
    {
      id: 2,
      title:  'Meeting at School',
      day: 'Feb 1st at 11:00AM',
      description: 'Meet with the computer science club to talk about coding and stuff'
    },
    {
      id: 3,
      title: 'Grocery Shopping',
      day: 'Feb 2nd at 8:00AM',
      description: 'Go to Whole Foods to buy groceries that are too expensive'
    },
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle showing description
  const toggleShowDesc = (id) => {
    setTasks(
      tasks.map( (task) => 
        task.id === id ? { ...task, showDesc: !task.showDesc } : task
      )
    )
  }

  // add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { ...task, id: id }
    setTasks([...tasks, newTask])
    console.log('new task id: ', newTask.id)
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleShowDesc} />
      ) : (
        'No Tasks To Show'
      )} 
    </div>
  )
}

export default App 
