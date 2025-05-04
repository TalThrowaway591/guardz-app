import type { Route } from "./+types/submit";
import type { SubmitHandler } from "react-hook-form";
import { Title } from "~/components/Title/Title";

import { useForm } from "react-hook-form"

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
    return (
        <Title text="Gaurdz Web Application" />
    )
}