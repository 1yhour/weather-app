import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch, loading }) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        onSearch(city);
    };

    return (
        <div className="relative group mb-8">
            <input
                type="text"
                placeholder="Search City..."
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-3 pl-12 pr-12 text-white placeholder:text-white/40 outline-none focus:bg-black/30 focus:border-white/30 transition-all duration-300 shadow-inner"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Search className="absolute left-4 top-3.5 text-white/50" size={18} />

            <button
                onClick={handleSearch}
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-white/10 hover:bg-white/20 text-white rounded-xl px-3 transition-colors disabled:opacity-50"
            >
                {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                ) : "Go"}
            </button>
        </div>
    );
}