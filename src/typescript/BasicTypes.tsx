
export function BasicTypes() {
  
  const name: string = 'hokay';
  const age: number = 22;
  const isActive: boolean = true;

  const technologies: string[] = ['typescript', 'react', 'nodejs'];

    return (
    <div>
        <h3>basic types</h3>
        <p></p>
        {name} {age} {isActive ? 'is active' : 'is not active'} {technologies.join(", ")}
    </div>
  )
}
