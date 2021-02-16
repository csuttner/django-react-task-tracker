import { useState } from 'react'
import { useEffect } from 'react'
import Header from  './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState({})

  // update data from API on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/');
        const tsks = await res.json();
        setTasks(tsks);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData()
  }, [])

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
