export const formatDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

export const getTheme = (weather) => {
    if (!weather) return "from-gray-900 via-purple-900 to-violet-900";

    const temp = weather.main.temp;
    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes("rain")) return "from-slate-900 via-blue-900 to-slate-900";
    if (condition.includes("cloud")) return "from-gray-800 via-blue-800 to-gray-900";
    if (temp > 30) return "from-orange-500 via-red-500 to-yellow-500";
    if (temp > 20) return "from-blue-400 via-indigo-500 to-purple-500";

    return "from-cyan-500 via-blue-600 to-blue-900";
};