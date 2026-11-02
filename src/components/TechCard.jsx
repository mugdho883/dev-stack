export default function TechCard({ tech, added, onAdd }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">{tech.badge}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-700">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-slate-800">
          <span className="text-amber-400">★</span>{tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        className="mt-4 rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
