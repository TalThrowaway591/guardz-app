import type { Route } from "./+types/submit";
import { Title } from "~/components/Title/Title";

import { PageContainer } from "~/components/PageContainer/PageContainer";

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
        <PageContainer>
            <Title text="Gaurdz Web Application" />
        </PageContainer>
    )
}