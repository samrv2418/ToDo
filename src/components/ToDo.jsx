import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo=({toDo,markDone,setUpdateData,deleteTask})=>{

    return (
        <>
            {toDo && toDo
                .sort((a,b)=> a.id>b.id ? 1 : -1)
                .map((item,index)=>{

                    return (
                    <div key={item.id}>
                        <div className='tasks-wrapper'>
                        <div className={ item.status ?  'task-done task-wrapper' : 'task-wrapper' }>
                            <div className='task-count'>
                            <span>{index+1}</span>
                            </div>
                            <div className='task-title'>
                            <span>{item.title}</span>
                            </div> 

                            <div className='icon-wrapper'>
                            <span onClick={()=>markDone(item.id)} title='Completed / NotCompleted'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>

                            {item.status ? null :
                            
                                <span title='Edit' 
                                onClick={()=>setUpdateData(item)}>
                                <FontAwesomeIcon icon={faPen} />
                                </span>
                            }
                            
                            <span  onClick={()=>deleteTask(item.id)} title='Delete'>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </span>

                            </div>

                        </div>
                        </div>
                    </div>
                    )

                })
            }
        </>
    )

}

export default ToDo