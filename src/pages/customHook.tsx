import React from 'react';

import { useFetchData } from '../hook/useCustomHook';

interface Pokemon {
    name: string;
    url: string;
}

function CustomHook() {
    const { data } = useFetchData<Pokemon[]>(
        `${process.env.REACT_APP_URL}pokemon?limit=10&offset=0`
    );

    return <div></div>;
}

export default CustomHook;
