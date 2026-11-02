export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 py-8 text-center text-sm text-slate-500">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((item) => (
              <li key={item.id} className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
                <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight">{item.name}</p>
                  <p className="text-[11px] text-slate-400">{item.category}</p>
                </div>
                <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`} className="text-lg text-slate-400 hover:text-red-500">✕</button>
              </li>
            ))}
          </ul>
          <button onClick={onRemoveAll} className="mt-6 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
