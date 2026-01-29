import { MapPin, Droplets, Wind, Thermometer } from "lucide-react";
import StatCard from "./StatCard";

export default function WeatherDisplay({ weather }) {
    // Define local float animation
    const floatAnimation = `
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }
  `;

    return (
        <div className="text-center animate-in fade-in zoom-in duration-500">
            <style>{floatAnimation}</style>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 mb-6">
                <MapPin size={14} className="text-white" />
                <span className="text-white font-medium tracking-wide text-sm">
          {weather.name}, {weather.sys.country}
        </span>
            </div>

            {/* Icon & Temperature */}
            <div className="relative py-4">
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt="weather icon"
                    className="w-48 h-48 mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                />
                <h1 className="text-7xl font-light text-white drop-shadow-lg -mt-4 tracking-tighter">
                    {Math.round(weather.main.temp)}°
                </h1>
                <p className="text-lg text-white/80 capitalize font-medium mt-2">
                    {weather.weather[0].description}
                </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-4">
                <StatCard
                    icon={<Droplets size={18}/>}
                    label="Humidity"
                    value={`${weather.main.humidity}%`}
                    color="text-blue-300"
                />
                <StatCard
                    icon={<Wind size={18}/>}
                    label="Wind"
                    value={`${weather.wind.speed} m/s`}
                    color="text-teal-300"
                />
                <StatCard
                    icon={<Thermometer size={18}/>}
                    label="Feels"
                    value={`${Math.round(weather.main.feels_like)}°`}
                    color="text-orange-300"
                />
            </div>
        </div>
    );
}