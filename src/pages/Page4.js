const Todo = ({id, todo, remove}) => {
  return (
    <li key={id} onClick={() => remove(id)}><button>-</button> {todo}</li>
  )
}

export const Page4 = () => {
  const todos = ['Water plants', 'Clean the room', 'Call mom', 'Make 1000000000$ in 10 days']

  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo id={index} todo={todo} remove={(id)=>todos.splice(id, 1)}/>
      ))}
    </ul>
  )
}