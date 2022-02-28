import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isUser, setIsUser] = useState(true)
    const [user, setUser] = useState()
    const [notes, setNotes] = useState([]);

    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes');
        if (result !== null) setNotes(JSON.parse(result));
    };

    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('user');

            if (result === null) return setIsUser(true);

            setUser(JSON.parse(result));
            setIsUser(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        findNotes()
    }, [])

    const state = {
        isUser: [isUser, setIsUser],
        user: [user, setUser],
        isLoading: [isLoading, setIsLoading],
        notes: [notes, setNotes],
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}