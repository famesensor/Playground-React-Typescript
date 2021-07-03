import React, { useEffect, useState } from 'react';

const UseEffectPage: React.FC = () => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setVal((v) => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>UseEffect</h2>
            <p>{val}</p>
        </div>
    );
};

export default UseEffectPage;
