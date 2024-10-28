import {useState} from 'react'

export  function Counter() {
    const [count, setCount] = useState<number>(0)

    const increment = ( value: number) => {
        setCount(count + value)
    }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(-1)}>- 1</button>
    </div>
  )
}
