export const Page2 = () => {
  const todos = ['Water plants', 'Clean the room', 'Call mom', 'Make 1000000000$ in 10 days']

  return (
    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}