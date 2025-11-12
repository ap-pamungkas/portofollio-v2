import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import FadeIn from "../components/FadeIn.jsx";
export default function ContactMe() {
  return (
    // Pastikan konsisten dengan max-w-6xl dan scroll-offset
    <section
      id="contact"
      className="bg-neutral-900 text-white p-8 md:p-16"
      // Tambahkan offset scroll yang sama
      style={{ marginTop: "-6rem", paddingTop: "6rem" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="left">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-serif font-bold mr-4">contact me</h2>
            <div className="h-0.5 bg-[#AAEDEF] grow"></div>
          </div>
        </FadeIn>

        {/* =======================
            GRID INFORMASI DAN FORMULIR
            ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}

          <FadeIn direction="left" delay={200}>
            <p className="text-lg text-neutral-300 mb-6">
              Tertarik untuk bekerja sama atau sekadar menyapa? Jangan ragu
              untuk menghubungi saya melalui formulir di samping atau melalui
              detail kontak berikut:
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-lg">
                <FaEnvelope className="text-[#AAEDEF] mr-3" size={20} />
                <a
                  href="mailto:putra@example.com"
                  className="hover:text-[#AAEDEF] transition-colors"
                >
                  agustinusputra94@gmail.com
                </a>
              </li>
              <li className="flex items-center text-lg">
                <FaPhone className="text-[#AAEDEF] mr-3" size={20} />
                <a
                  href="tel:+628123456789"
                  className="hover:text-[#AAEDEF] transition-colors"
                >
                  +6281256853990
                </a>
              </li>
              <li className="flex items-center text-lg text-neutral-300">
                <FaMapMarkerAlt className="text-[#AAEDEF] mr-3" size={20} />
                Sintang, Indonesia
              </li>
            </ul>
          </FadeIn>

          {/* Formulir Kontak (Placeholder) */}
          <FadeIn direction="right" delay={200}>
            <form className="space-y-4 bg-neutral-800 p-6 rounded-xl shadow-lg">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full bg-neutral-700 text-white p-3 rounded-lg border border-neutral-600 focus:border-[#AAEDEF] focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-neutral-700 text-white p-3 rounded-lg border border-neutral-600 focus:border-[#AAEDEF] focus:outline-none"
                required
              />
              <textarea
                placeholder="Pesan Anda"
                rows="4"
                className="w-full bg-neutral-700 text-white p-3 rounded-lg border border-neutral-600 focus:border-[#AAEDEF] focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#AAEDEF] text-neutral-900 font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
