
export function BasicFunctions() {

    const addTwoNumbers = ( a:number, b:number ):number => {
        return a + b;
    }

  return (
    <div>
        <h2> Functions </h2>
        <span>The Result of add is: { addTwoNumbers( 1, 2 ) } </span>
    </div>
  )
}
