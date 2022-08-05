const UpdateTaskForm=({updateData,changeHolder,updateTask,cancleUpdate})=>
{
    if(document.querySelector(".update-task"))
    {
        const element=document.querySelector(".update-task")
        element.classList.add('col-12')
    }
    return (
        <>
            <div className='row'>
                <div className='col-12 col-sm update-input'>
                    <input
                        value={updateData && updateData.title}
                        onChange={changeHolder}
                        className='form-control form-control-lg' />
                </div>
                <div className='col-auto'>
                    <button onClick={updateTask} className='btn btn-lg btn-success'>
                    Update
                    </button>
                </div>
                <div className='col-auto'>
                    <button
                    onClick={cancleUpdate} 
                    className='btn btn-lg btn-warning'>
                    Cancle
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdateTaskForm