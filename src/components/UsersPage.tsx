import { useUser } from "../hooks"
import UserRow from "./UserRow";

export function UsersPage() {
    const { user, page, setPage } = useUser();

    return (
        <>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((userState) => (
                        <UserRow key={userState.id} user={userState} />
                    ))}
                </tbody>
            </table>
            <div>
                {page === 2 && <button onClick={() => setPage(1)} >{"<"}</button>}
                {page === 1 && <button onClick={() => setPage(2)} >{">"}</button>}
            </div>
        </>
    )
}