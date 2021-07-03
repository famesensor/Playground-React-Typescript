import React from 'react';

import { useFetchData } from '../hook/useCustomHook';

interface Pokemon {
    name: string;
    url: string;
}

const CustomHook: React.FC = () => {
    const { data } = useFetchData<Pokemon[]>(
        `${process.env.REACT_APP_URL}pokemon?limit=10&offset=0`
    );

    const listItems = data?.map((res) => {
        return <li key={res.url}>{res.name}</li>;
    });

    return (
        <div>
            <h2>Custom-Hook</h2>
            <h4>Pokemon</h4>
            <ul>{listItems}</ul>
        </div>
    );
};

export default CustomHook;
