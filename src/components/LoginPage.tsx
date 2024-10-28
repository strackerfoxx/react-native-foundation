import { useAuthStore } from "../store/auth.store"

export  function LoginPage() {
    const authStatus = useAuthStore( store => store.process )
    const userStore = useAuthStore( store => store.user )

    const login = useAuthStore ( store => store.login )
    const logout = useAuthStore( store => store.logout )

    if(authStatus === "checking"){
        return <h3>Loading...</h3>
    }

  return (
    <div>
        {authStatus === "authenticated" ? <div>Autenticado como: {JSON.stringify(userStore)}</div> : <div>No Autenticado</div>}
        {authStatus === "authenticated" ? <button onClick={logout}>LogOut</button> : <button onClick={() => login("hoa", "adio")}>Login</button> }
    </div>
  )
}
