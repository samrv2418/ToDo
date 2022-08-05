import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ToDo from './components/ToDo'
import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'

function App() {

  const [toDo,setToDo]=useState([
    
  ])

//----------- temporary states----------------

// new task state
  const [newTask,setNewTask]=useState('')
// update task state
  const [updateData,setUpdateData]=useState('')

  
//----------------- Functions --------------------------- 

  const addTask=()=>{

    if(newTask)
    {
      let num = toDo.length+1

      // let newEntry={id:num,title:newTask,status:false}
      // setToDo([...toDo,newEntry])

      // refactored

      setToDo([...toDo,{id:num,title:newTask,status:false}])
      
      setNewTask('')

    }

  }

  const deleteTask=(id)=>{

    // let newTasks=toDo.filter(task => task.id !== id )

    // refactored

    setToDo(toDo.filter(task => task.id !== id ))


  }

  const markDone=(id)=>{

    // let newTask= toDo.map(item => {

    //   if(item.id===id)
    //   {
    //     return ({...item, status:!item.status})
    //   }
    //   return item
    // })

    // refactored
    setToDo(toDo.map(item => item.id===id ? 
                                  ({...item, status:!item.status}) : 
                                  (item)
      ))

  }

  const cancleUpdate=()=>{

    setUpdateData('')

  }

// change task holder
  const changeHolder=(e)=>
  {
    // let newEntry={
    //   id:updateData.id,
    //   title:e.target.value,
    //   status:updateData.status ? true : false,
    // }
    // setUpdateData(newEntry)
   


    setUpdateData({
      ...updateData,title:e.target.value
    }
    )

  }

  const updateTask=()=>{

    // let filterRecords= [...toDo].filter( task => task.id !== updateData.id)
    // let updateObject=[...filterRecords,updateData]
    // setToDo(updateObject)

    // refactored

    let removeOldRecords= [...toDo].filter( task => task.id !== updateData.id)
    // console.log(updateData)
    setToDo([...removeOldRecords,updateData])

    setUpdateData('')

  }



  return (
    <div className="App">
       <br></br>
       <h4>ToDo App</h4>
       <br></br>

       { updateData && updateData ? 
       (
        <UpdateTaskForm
            updateData={updateData}
            changeHolder={changeHolder}
            updateTask={updateTask}
            cancleUpdate={cancleUpdate}
        />

       ) : (

       <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask} 
       />
       ) }
    
      <br></br>

       {toDo && toDo.length ? '' : 'No Tasks...'  }
       <ToDo
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
       />
       
    </div>
  )
}

export default App
