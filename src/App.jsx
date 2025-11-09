import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cards from "./components/Cards";
import AuthTabs from "./components/AuthTabs";

function Footer() {
  return (
    <footer id="contacts" className="mt-20 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-600">
          <p>© {new Date().getFullYear()} AutoFind — поиск и сравнение СТО</p>
          <div className="flex items-center gap-4">
            <a href="#companies" className="hover:text-stone-900">Компании</a>
            <a href="#services" className="hover:text-stone-900">Услуги</a>
            <a href="#register" className="hover:text-stone-900">Вход / Регистрация</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cards />
        <AuthTabs />
      </main>
      <Footer />
    </div>
  );
}
