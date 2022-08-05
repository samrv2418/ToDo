const UpdateTaskForm=({updateData,changeHolder,updateTask,cancleUpdate})=>
{
    return (
        <>
            <div className='row'>
                <div className='col'>
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