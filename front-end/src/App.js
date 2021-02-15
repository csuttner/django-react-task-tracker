import { useState } from 'react'
import Header from  './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:00PM',
      reminder: true,
    },
    {
      id: 2,
      text:  'Meeting at School',
      day: 'Feb 1st at 11:00AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 2nd at 8:00AM',
      reminder: false,
    },
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
        )
      )
  }


  // add tasks
  const addTask = (task) => {
    const id = Math.floor( Math.random * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
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
        onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )} 
    </div>
  )
}

export default App 
