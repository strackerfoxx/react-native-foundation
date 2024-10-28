import type { User } from "../interfaces";
interface Props{
    user: User;
}

export default function UserRow( {user}: Props ) {
    const {avatar, first_name, email} = user;
  return (
    <tr>
        <td><img src={avatar} alt="avatar" /></td>
        <td><h3>{first_name}</h3></td>
        <td><h4>{email}</h4></td>
    </tr>
  )
}
