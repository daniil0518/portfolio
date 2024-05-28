"use client";
import { createContext, useEffect, useState } from "react";

const initialValue = {
    data: {}
};

const getInitData = async () => {
    try {
        const res = await fetch('/api/data.json');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error('Error fetching initial data:', error);
        return initialValue;
    }
};

export const DataContext = createContext(initialValue);

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        const fetchData = async () => {
            const initialData = await getInitData();
            setData(initialData);
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once after the initial render

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;