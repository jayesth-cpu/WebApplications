'use client' //important to tell the system for deferentiating server side and client side components
/* Benefits
Performance: By clearly distinguishing between server and client components, Next.js can optimize the rendering and reduce the amount of JavaScript sent to the client.
Clarity: It makes the codebase more predictable and easier to understand by explicitly stating the execution context of the component. */
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState('')
  const [desc, setdesc] = useState('')
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(task, desc)
    setmainTask([...mainTask, { task, desc }])
    console.log(mainTask)
    setTask('')        //it will set the form to empty after submission
    setdesc('')

  }

  const deleteHandler = (i) => {
    let tempTask = [...mainTask]
    tempTask.splice(i, 1)
    setmainTask(tempTask)
  }

  let renderTask = <h2>No task available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-xl font-semibold'>{t.task}</h5>
          <h6 className='text-2xl font-semibold'>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold '> Delete</button>
      </li>
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>Jayesths todo-list</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder="enter task" value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }} />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder="enter description here" value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-black text-white px-4 py-2.5 text-2xl font-bold rounded m-15'>Add Task</button>

      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page