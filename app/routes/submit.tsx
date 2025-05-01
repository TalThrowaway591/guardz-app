import type { Route } from "./+types/submit";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form"

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Submit" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

type Inputs = {
    example: string
    exampleRequired: string
}

export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    // console.log(watch("example")) // watch input value by passing the name of it

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    return (
        <div className="page">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-field" placeholder="title" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-field" placeholder="body" {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}