import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Building2, User } from "lucide-react";

export default function AuthTabs() {
  const [tab, setTab] = useState("user");

  return (
    <section id="register" className="py-16 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex gap-2 rounded-xl bg-white p-2 border border-stone-200 shadow-sm">
            <button
              onClick={() => setTab("user")}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm ${
                tab === "user" ? "bg-stone-900 text-white" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              <User size={16} /> Пользователь
            </button>
            <button
              onClick={() => setTab("company")}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm ${
                tab === "company" ? "bg-stone-900 text-white" : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              <Building2 size={16} /> Компания
            </button>
          </div>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              {tab === "user" ? (
                <motion.form
                  key="user"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl bg-white p-6 border border-stone-200 shadow-sm"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3 className="text-stone-900 font-medium">Вход для пользователя</h3>
                  <div className="mt-4 grid gap-3">
                    <label className="text-sm text-stone-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input
                        type="email"
                        className="w-full rounded-lg border border-stone-300 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-stone-200"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <label className="mt-3 text-sm text-stone-700">Пароль</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input
                        type="password"
                        className="w-full rounded-lg border border-stone-300 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-stone-200"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-stone-900 px-4 py-2 text-white hover:bg-stone-800">
                      Войти
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="company"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl bg-white p-6 border border-stone-200 shadow-sm"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3 className="text-stone-900 font-medium">Регистрация компании</h3>
                  <div className="mt-4 grid gap-3">
                    <label className="text-sm text-stone-700">Название компании</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-200"
                      placeholder="Например, AutoPro"
                      required
                    />
                    <label className="text-sm text-stone-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input
                        type="email"
                        className="w-full rounded-lg border border-stone-300 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-stone-200"
                        placeholder="company@example.com"
                        required
                      />
                    </div>
                    <label className="mt-3 text-sm text-stone-700">Пароль</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                      <input
                        type="password"
                        className="w-full rounded-lg border border-stone-300 pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-stone-200"
                        placeholder="Придумайте пароль"
                        required
                      />
                    </div>
                    <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-stone-900 px-4 py-2 text-white hover:bg-stone-800">
                      Зарегистрироваться
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
