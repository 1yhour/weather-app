import { useState } from "react";

const API_KEY = "ac26b3021d4457de71bbc4bb39082620"; // Ideally, use import.meta.env.VITE_API_KEY

export function useWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        if (!city) return;
        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            if (!res.ok) throw new Error("City not found");
            const data = await res.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { weather, loading, error, fetchWeather };
}