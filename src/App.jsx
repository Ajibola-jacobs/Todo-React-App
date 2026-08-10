import { useState } from 'react'
import './App.css'

function App() {

  //useState is an array because todos is a list
  const [todos, setTodos] = useState([]);

  //useState is a text because input is written/typed
  const [input, setInput] = useState("");

  const addTodo = () => {
  if (input.trim() === "") return;

  setTodos([
    ...todos,
    {
      id: Date.now(),
      text: input,
      completed: false,
    },
  ]);

  setInput("");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-600 to-emerald-600 font-mono">
      
        <div className="bg-white shadow-lg rounded-3xl p-16">

            <h1 className='uppercase font-bold text-4xl text-gray-900 text-center mb-8'>
               React Todo App 📓
            </h1>

             <div className="mb-4 flex">

                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new todo" className='grow px-3 py-2 border border-gray-400 rounded-l-lg focus:outline-none focus:ring ring-blue-500'/>

                <button onClick={addTodo} className='bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 px-4 py-2 cursor-pointer'>Add</button>

            </div>

            <ul className="space-y-2">
                {
                  todos.map((todo) => (
                    <li key={todo.id} className='flex items-center p-3 rounded-lg bg-slate-200 border border-gray-200'>

                    {/* checkbox */}
                      <input type="checkbox" 
                      checked={todo.completed}
                      onChange={() => setTodos(
                        todos.map( (t) => (
                          t.id === todo.id ? {...t, completed: !t.completed} : t
                        ))

                      )}
                      className='mr-2 h-5 w-5 text-emerald-500'/>

                      {/* text */}
                      <span className= {`grow font-sans ${todo.completed ? 'line-through text-gray-400' :  'text-gray-800'}`}
                      >{todo.text}</span>

                      {/* delete */}
                      <button onClick={() => setTodos(todos.filter(
                        (t) => t.id !== todo.id
                      )
                      )}
                      className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'
                      >🗑️</button>
                    </li>
                  ))
                }
            </ul>

        </div>

    </div>
  )
}

export default App
