import type { Route } from "./+types/submit";
import { Title } from "~/components/Title/Title";

import { useState, useEffect } from "react";
import { DataEntity } from "~/components/DataEntity/DataEntity";
import { apiConfig } from "config";
import { socket } from '../socket';

const { uri, routes } = apiConfig;

const apiFetchPath = `${uri}${routes.fetchEntries}`;

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Submit" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function App() {
    const [data, setData] = useState<Array<{ title: string, body: string }>>([]);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState<string[]>([]);

    // @ts-ignore
    const addEntry = (newEntry) => {
        setData(prevData => {
            const updated = [...prevData, newEntry];
            console.log('Updated data:', updated);
            return updated;
        });
    }
    useEffect(() => {

        const fetchData = async () => {
            console.log('fetching data..')
            const response = await fetch(apiFetchPath)

            if (response.ok) {
                const body = await response.json();
                setData(body)
                console.log('new data', data)
            } else {
                // do something... 
            }

        }
        fetchData();

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onFooEvent(value: string) {
            setFooEvents(previous => [...previous, value]);
        }


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);

        // @ts-ignore
        socket.on('on-create', newEntry => {
            addEntry(newEntry)
        })
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvent);
        };


    }, []);

    console.log('data 3')
    console.log(data)
    return (
        <>
            <Title text="View Data" />
            {data.map(i => <DataEntity title={i.title} body={i.body} />)}
        </>
    )
}