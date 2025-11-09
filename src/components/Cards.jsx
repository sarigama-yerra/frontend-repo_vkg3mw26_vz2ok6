import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Шиномонтаж", count: 124, color: "bg-amber-100 text-amber-900" },
  { name: "Замена масла", count: 98, color: "bg-sky-100 text-sky-900" },
  { name: "Диагностика", count: 76, color: "bg-emerald-100 text-emerald-900" },
  { name: "Тормозная система", count: 52, color: "bg-stone-100 text-stone-900" },
];

const companies = [
  {
    name: "AutoPro",
    desc: "Шиномонтаж и экспресс-замена масел",
    rating: 4.7,
    photos: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493236296276-d17357e2882d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    name: "DriveFix",
    desc: "Диагностика и электрика",
    rating: 4.5,
    photos: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518306727298-4c17e1bf6948?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517148731409-bef7ed14f6cf?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    name: "Brake&Go",
    desc: "Ремонт тормозной системы",
    rating: 4.8,
    photos: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

function MiniCarousel({ images }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-none">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="h-40 w-full min-w-full object-cover snap-center"
          />
        ))}
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-stone-900">Популярные услуги</h2>
          <a href="#services" className="text-sm text-stone-700 hover:text-stone-900">
            Смотреть все
          </a>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.a
              key={s.name}
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-xl p-4 ${s.color} ring-1 ring-inset ring-stone-200/60 hover:shadow transition`}
            >
              <div className="text-sm">{s.name}</div>
              <div className="mt-1 text-xs opacity-70">{s.count} предложений</div>
            </motion.a>
          ))}
        </div>

        <div id="companies" className="mt-14 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-stone-900">Компании рядом</h2>
          <a href="#companies" className="text-sm text-stone-700 hover:text-stone-900">
            Открыть каталог
          </a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-stone-200 bg-white p-3 shadow-sm"
            >
              <MiniCarousel images={c.photos} />
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-stone-900">{c.name}</h3>
                  <p className="text-sm text-stone-600">{c.desc}</p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-md bg-amber-100 text-amber-900 px-2 py-1 text-xs font-medium">
                  <Star size={14} /> {c.rating}
                </div>
              </div>
              <a
                href="#company"
                className="mt-3 inline-flex items-center gap-1 text-sm text-stone-800 hover:text-stone-900"
              >
                Подробнее <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
