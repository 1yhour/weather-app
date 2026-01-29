import { Calendar, Cloud } from "lucide-react";
import { useWeather } from "./hooks/useWeather";
import { getTheme, formatDate } from "./utils/weatherHelpers";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

export default function App() {
    const { weather, loading, error, fetchWeather } = useWeather();
    const currentDate = formatDate();

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-1000 bg-gradient-to-br ${getTheme(weather)}`}>

            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-black/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md relative z-10">

                {/* Date Header */}
                <div className="flex items-center justify-between mb-6 px-2">
                    <div className="text-white/80 text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                        <Calendar size={14} />
                        {currentDate}
                    </div>
                </div>

                {/* Main Glass Card */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[32px] p-8 relative overflow-hidden transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    <SearchBar onSearch={fetchWeather} loading={loading} />

                    {error && (
                        <div className="bg-red-500/20 border border-red-500/30 text-red-100 p-3 rounded-xl text-center text-sm mb-6 backdrop-blur-md">
                            ⚠️ {error}
                        </div>
                    )}

                    {weather ? (
                        <WeatherDisplay weather={weather} />
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-12 opacity-50">
                            <Cloud size={64} className="mb-4 text-white animate-pulse" />
                            <p className="text-white font-light text-lg">Explore the forecast</p>
                        </div>
                    )}
                </div>

                <p className="text-center text-white/30 text-xs mt-8">Powered by OpenWeather</p>
            </div>
        </div>
    );
}