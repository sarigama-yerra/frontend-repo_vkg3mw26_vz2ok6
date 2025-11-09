import { Menu, X, Wrench, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Компании", href: "#companies" },
    { label: "Услуги", href: "#services" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-900 text-white">
              <Wrench size={18} />
            </span>
            <span className="text-stone-900 font-semibold tracking-tight">AutoFind</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-stone-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-stone-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition"
            >
              <User size={16} /> Войти
            </a>
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-3 py-2 text-sm text-white hover:bg-stone-800 transition"
            >
              Регистрация
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-300 text-stone-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-stone-800 hover:bg-stone-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <a
                  href="#login"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition"
                >
                  <User size={16} /> Войти
                </a>
                <a
                  href="#register"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-3 py-2 text-sm text-white hover:bg-stone-800 transition"
                >
                  Регистрация
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
