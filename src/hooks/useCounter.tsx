import {useState} from 'react'

interface Options {
    initValue?: number
}

export function useCounter({initValue = 0}: Options) {
    const [count, setCount] = useState<number>(initValue)
    const increment = ( value: number) => {
        if(count + value < 0) return
        setCount(count + value)
    }

    return {
        //properties
        count,
        //methods
        increment
    }
}
