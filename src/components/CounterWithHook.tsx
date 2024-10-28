
import { useCounter } from '../hooks/useCounter'

export  function CounterWithHook() {
  const { count, increment } = useCounter({initValue: 5})

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(-1)}>- 1</button>
    </div>
  )
}
