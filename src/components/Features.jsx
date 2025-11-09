import { Wrench, ShieldCheck, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wrench,
    title: "Проверенные услуги",
    desc: "Компании проходят модерацию — выбирайте из надежных СТО",
  },
  {
    icon: ShieldCheck,
    title: "Прозрачность",
    desc: "Честные описания, фото и контактные данные",
  },
  { icon: Clock, title: "Экономия времени", desc: "Фильтры и поиск в пару кликов" },
  { icon: Star, title: "Оценки и отзывы", desc: "Смотрите рейтинг и сравнивайте" },
];

export default function Features() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-stone-900">Почему это удобно</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-3 text-stone-900 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
