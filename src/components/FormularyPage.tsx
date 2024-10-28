import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

export function FormularyPage() {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: "",
            password: "pass"
        }
    })

    const onSubmit = (myForm: FormInputs) => {
        console.log({myForm})
    }

    console.log(watch("email"))

    return (
        <div>
            <h3>Formulary</h3>
            <form style={{ display: "flex", flexDirection: "column", width: "20vw" }} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" {...register("email")} />
                <input type="password" placeholder="Password" {...register("password")} />
                <button type="submit">send</button>
            </form>
            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </div>
    )
}
