import { create } from "zustand"

interface AuthState{
    process: "authenticated" | "unauthenticated" | "checking",
    token?: string,
    user?: {
        name: string,
        email: string,
        password: string
    },
    login: (email: string, password: string) => void,
    logout: () => void
}

export const useAuthStore = create<AuthState>()( (set) => ({
    process: "unauthenticated",
    token: undefined,
    user: undefined,

    login(email, password){
        set({
            process: "checking"
        })
        setTimeout(() => {
            set({
                process: "authenticated",
                token: "ABC123",
                user: {
                    name: "papu",
                    email: email,
                    password: password,
                }
            })
        }, 1500);
    },
    logout() {
        set({
            process: "unauthenticated",
            token: undefined,
            user: undefined
        })
    },
}) )