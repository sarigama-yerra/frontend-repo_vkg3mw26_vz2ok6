import { ArrowRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900"
            >
              Найдите и сравните лучшие СТО в вашем городе
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-stone-600"
            >
              Платформа для поиска и сравнения услуг: шиномонтаж, диагностика, замена масла и многое другое. Чистый интерфейс и удобные фильтры помогут быстро принять решение.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-white hover:bg-stone-800 transition"
              >
                Найти СТО <ArrowRight size={18} />
              </a>
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-lg border border-stone-300 px-5 py-3 text-stone-800 hover:bg-stone-50 transition"
              >
                <Building2 size={18} /> Добавить свою компанию
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-stone-100" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-stone-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
