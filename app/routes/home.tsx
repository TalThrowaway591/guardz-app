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
    title: string
    body: string
}

export default function App() {
    return (<div>hello</div>)
}