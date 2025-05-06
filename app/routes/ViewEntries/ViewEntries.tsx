import './ViewEntries.css'
import type { Route } from "../../routes/ViewEntries/+types/ViewEntries"
import { Title } from "~/components/Title/Title";

import { useState, useEffect } from "react";
import { DataEntity } from "~/components/DataEntity/DataEntity";
import { apiConfig } from "api-config";
import { socket } from '../../socket';

const { uri, routes } = apiConfig;

const apiFetchPath = `${uri}${routes.fetchEntries}`;

export type Entry = {
    title: string;
    body: string;
    ip: string;
    createdTimestamp: number;
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "View Entries" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

type DisplaySelectionType = 'list' | 'table';

export default function App() {
    const [data, setData] = useState<Array<Entry>>([]);
    const [displaySelection, setDisplaySelection] = useState<DisplaySelectionType>('list')

    const addEntry = (newEntry: Entry) => {
        setData(prevData => [...prevData, newEntry]);
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiFetchPath)

            if (response.ok) {
                const body = await response.json();
                setData(body)
            } else {
            }

        }
        fetchData();

        socket.on('on-create', newEntry => {
            addEntry(newEntry)
        })

    }, []);

    const renderTable = () => {
        return (
            <table className="data-table">
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>IP Address</th>
                    <th>Created Timestamp</th>
                </tr>
                {data.map(i => <tr>
                    <td>{i.title}</td>
                    <td>{i.body}</td>
                    <td>{i.ip}</td>
                    <td>{new Date(i.createdTimestamp).toISOString()}</td>
                </tr>)}
            </table>
        )
    }

    return (
        <>
            <Title text="View Data" />
            <div className="display-selection-container">
                <div
                    className={`display-selection-container-item ${displaySelection === 'list' ? 'display-selection-container-item-focus' : ''}`}
                    onClick={() => setDisplaySelection('list')}>List
                </div>
                <div
                    className={`display-selection-container-item ${displaySelection === 'table' ? 'display-selection-container-item-focus' : ''}`}
                    onClick={() => setDisplaySelection('table')}>Table
                </div>
            </div>
            {displaySelection === 'list' ? data.map(i => <DataEntity entry={i} />) : renderTable()}
        </>
    )
}