import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces"

const getUsers = async (page: number = 1) => {
    try {
        const { data } = await axios<ReqResUserListResponse>("https://reqres.in/api/users", {
            params: {
                page: page
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
        return [];
    }
}

export function useUser() {
    const [user, setUser] = useState<User[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        getUsers(page).then( setUser )
    }, [page])

  return {
    //properties
    user,
    page,
    //methods
    setPage
  }
}
