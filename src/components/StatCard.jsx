export default function StatCard({ icon, label, value, color }) {
    return (
        <div className="flex flex-col items-center bg-black/20 hover:bg-black/30 transition-colors p-3 rounded-2xl border border-white/5 group">
            <div className={`mb-1 ${color} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                {label}
            </p>
            <p className="text-white font-bold text-lg">{value}</p>
        </div>
    );
}