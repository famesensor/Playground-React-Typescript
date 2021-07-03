import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetchData<Payload>(url: string): {
    data: Payload | null;
    done: boolean;
} {
    const [data, setData] = useState<Payload | null>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}pokemon?limit=10&offset=0`)
            .then((res) => {
                setData(res.data['results']);
                setDone(true);
            });
    }, [url]);

    return { data, done };
}
