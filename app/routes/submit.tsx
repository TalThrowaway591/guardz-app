import type { Route } from "./+types/submit";
import type { SubmitHandler } from "react-hook-form";

import { useForm } from "react-hook-form"
import { Title } from "~/components/Title/Title";
import { apiConfig } from "config";

const { uri, routes } = apiConfig;

const apiSubmitPath = `${uri}${routes.submitEntry}`;

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Submit" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

type Inputs = {
    title: string
    body: string
}

export default function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await fetch(apiSubmitPath, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(data)
    }

    // console.log(watch("example")) // watch input value by passing the name of it

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    return (
        <>
            <Title text="Submit User Information" />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-field" placeholder="title" {...register("title")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-field" placeholder="body" {...register("body", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.title && <span>This field is required</span>}

                <input className="button" type="submit" />
            </form>
        </>
    )
}