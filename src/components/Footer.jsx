const groups = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};
const socials = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <img src="/images/logo-text.png" alt="Dev Stack" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-medium text-slate-700">
            {socials.map((s) => (
              <a key={s} href="#" className="hover:text-pink-600">{s}</a>
            ))}
          </div>
        </div>
        {Object.entries(groups).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">{title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {items.map((i) => (
                <li key={i}><a href="#" className="hover:text-pink-600">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-slate-100 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-pink-600">Privacy</a>
          <a href="#" className="hover:text-pink-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
