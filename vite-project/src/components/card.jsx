import React, { useState } from 'react' // 1. Ensure useState is imported
import edit from './icons/edit.svg'
import delete1 from './icons/delete.svg'

const Card = () => {
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([])
    // 2. NEW STATE: specific for the "Show Completed" toggle
    const [showFinished, setShowFinished] = useState(false)

    const inputhere = (e) => {
        settodo(e.target.value)
    }

    const savethis = () => {
        // Only add if input is not empty (optional improvement)
        if (todo.trim().length === 0) return; 
        settodos([...todos, { todo, id: Date.now(), iscomplete: false }])
        settodo("")
    }

    const handlecheckbox = (e) => {
        const id = e.target.name;
        const index = todos.findIndex(item => {
            return item.id === parseInt(id)
        })
        let newTodos = [...todos];
        newTodos[index].iscomplete = !newTodos[index].iscomplete;
        settodos(newTodos);
    }

    const deletethis = (id) => {
        const newTodos = todos.filter(item => {
            return item.id !== id
        });
        settodos(newTodos);
    }

    // 3. NEW FUNCTION: To toggle the showFinished state
    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }
    const edittodo=(id)=>{

        let t=todos.filter(item=> item.id==id)
        settodo(t[0].todo)
        let naya=todos.filter(item => item.id!==id)
        settodos(naya);

    }

    return (
        <div className="boddy h-screen flex justify-center">
            <div className='w-[60%] bg-[#EDE9FE] m-6 flex rounded p-2.5 flex-col gap-[10px]'>
                <div className="title font-bold text-[18px] flex justify-center">iTask- Manage your To-do at one place</div>
                <div className="font-bold text-[14px]">Add a To-do</div>
                <div className='flex justify-around '>
                    <input type="text" value={todo} onChange={inputhere} className="bg-white w-[80%] rounded-4xl border p-1 text-[12px]" placeholder='Add Task' />
                    <button className='bg-[#5722B6] p-1 rounded-4xl text-white h-[30px] w-[100px]' onClick={savethis}>Save
                    </button>
                </div>
                
                {/* 4. CONNECT THE CHECKBOX */}
                <div className="show flex flex-row gap-[5px]">
                    <input 
                        type="checkbox" 
                        onChange={toggleFinished} 
                        checked={showFinished} 
                    />
                    <div className="text-[12px]">Show Completed Tasks</div>
                </div>
                
                <div className="flex justify-center">
                    <div className="rect w-[70%] h-px bg-gray-500 rounded-3xl "></div>
                </div>
                <div className="font-bold">Your ToDo</div>
                <div className="todolist">
                    {todos.length === 0 && <div>No Todo is in list</div>}
                    
                    {/* 5. APPLY THE FILTER LOGIC */}
                    {todos
                        // If showFinished is TRUE, only return items where iscomplete is TRUE
                        // If showFinished is FALSE, return everything (true)
                        .filter(item => showFinished ? item.iscomplete : true)
                        .map(item => {
                            return (
                                <div key={item.id} className="items flex flex-row justify-between p-1">
                                    <div className='flex flex-row gap-[3px]'>
                                        <input 
                                            type="checkbox" 
                                            name={item.id} 
                                            onChange={handlecheckbox} 
                                            checked={item.iscomplete} 
                                        />
                                        <div className={item.iscomplete ? "line-through text-[12px]" : "text-[12px]"}>
                                            {item.todo}
                                        </div>
                                    </div>
                                    <div className="btns h-[18px] flex flex-row gap-[5px]">
                                        <button className='bg-[#5722B6] w-[30px] p-1 rounded-4xl flex justify-center' onClick={()=>edittodo(item.id)}> 
                                            <img src={edit} alt="" className='invert h-[9px]' /> 
                                        </button>
                                        <button 
                                            className='bg-[#5722B6] w-[30px] p-1 rounded-4xl flex justify-center' 
                                            onClick={() => deletethis(item.id)}
                                        > 
                                            <img src={delete1} alt="" className='invert' />
                                        </button>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Card