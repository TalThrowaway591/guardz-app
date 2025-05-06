import type { Route } from "../../routes/Home/+types/Home";
import { Title } from "~/components/Title/Title";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Submit" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function App() {
    return (
        <Title text="Guardz Web Application" />
    )
}