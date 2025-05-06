import type { Route } from "../../routes/SubmitEntry/+types/SubmitEntry"
import { useState } from "react";

import { Title } from "~/components/Title/Title";
import { apiConfig } from "api-config";

import './SubmitEntry.css'

const { uri, routes } = apiConfig;

const apiSubmitPath = `${uri}${routes.submitEntry}`;

type formDataType = {
    title: string;
    body: string;
}

type messageType = {
    body: string,
    isActive: boolean,
    isError: boolean
}

const initialFormData: formDataType = {
    title: '',
    body: ''
}

const initialMessage: messageType = {
    body: '',
    isActive: false,
    isError: false
}

const MESSAGES = {
    SUCCESSFUL_SUBMIT: 'The entry was submitted successfully!',
    ERROR_SUBMIT: 'There was an error submitting the entry',
    TITLE_VALIDATION_ERROR: 'Please fill a title.',
    BODY_VALIDATION_ERROR: 'Please fill a body.'
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Submit" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const App = () => {
    const [formData, setFormData] = useState<formDataType>({ ...initialFormData })
    const [message, setMessage] = useState<messageType>({ ...initialMessage })

    const onFormFieldChange = (field: string, value: string): void => {
        setFormData({ ...formData, [field]: value })
    }

    const onSubmit = (): void => {
        if (formData.title.length === 0) {
            setMessage({ body: MESSAGES.TITLE_VALIDATION_ERROR, isActive: true, isError: true })
        } else if (formData.body.length === 0) {
            setMessage({ body: MESSAGES.BODY_VALIDATION_ERROR, isActive: true, isError: true })
        } else {
            submitForm();
        }
    }

    const submitForm = async (): Promise<void> => {
        try {
            const response = await fetch(apiSubmitPath, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                setMessage({ body: MESSAGES.SUCCESSFUL_SUBMIT, isActive: true, isError: false })
                setFormData({ ...initialFormData })
            } else {
                handleSubmitError();
            }
        } catch (e) {
            handleSubmitError();
        }
    }

    const handleSubmitError = (): void => {
        setMessage({ body: MESSAGES.ERROR_SUBMIT, isActive: true, isError: true })
    }

    return (
        <>
            <Title text="Submit User Information" />

            <input className="form-field" placeholder="title" value={formData.title} onChange={e => onFormFieldChange("title", e.target.value)} />

            <input className="form-field" placeholder="body" value={formData.body} onChange={e => onFormFieldChange("body", e.target.value)} />

            <button className="submit-button" onClick={onSubmit}>Submit</button>

            {message.isActive && <div className={`form-message-${message.isError ? 'error' : 'success'}`}>{message.body}</div>}
        </>
    )
}

export default App; 