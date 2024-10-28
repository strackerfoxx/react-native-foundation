interface Person {
    name: string;
    age: number;
    isActive: boolean;
    studies?: Studies;
}
interface Studies {
    secondary: boolean;
    highSchool: boolean;
    university: boolean;
    master: boolean;
}

export function ObjectLiterals() {

    const person: Person = {
        name: 'hokay',
        age: 22,
        isActive: true
    }

  return (
    <div>
        <h3>object literals</h3>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </div>
  )
}
