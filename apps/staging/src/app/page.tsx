import Head from "next/head";
import Image from "next/image";

// Ambil environment variable
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "https://api-staging.example.com";
const THEME_COLOR = process.env.NEXT_PUBLIC_THEME_COLOR || "purple";

// Komponen header, props bisa ditambah untuk data dari database
function StudioHeader() {
  return (
    <header
      className={`flex flex-col items-center justify-center flex-1 px-4 sm:px-8 py-20 sm:py-32 text-center`}
      style={{ backgroundColor: THEME_COLOR === "purple" ? "#a78bfa" : undefined }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Studio
          <span
            className={
              THEME_COLOR === "purple"
                ? "text-purple-600 dark:text-purple-400"
                : "text-blue-600 dark:text-blue-400"
            }
          >
            VA
          </span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-10">
          Creative digital studio for brands, products, and experiences. We help
          you build, launch, and grow with design and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#showcase"
            className={`inline-block px-8 py-3 rounded-full ${
              THEME_COLOR === "purple"
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold text-base shadow-lg transition`}
          >
            See Our Work
          </a>
          <a
            href="mailto:hello@studiova.com"
            className={`inline-block px-8 py-3 rounded-full border ${
              THEME_COLOR === "purple"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950"
                : "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            } font-semibold text-base transition`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

// Komponen body utama, props bisa ditambah untuk data dari database
function StudioBody() {
  return (
    <>
      {/* header */}
      <StudioHeader />
      {/* section */}
      <section
        id="showcase"
        className={`w-full py-16 sm:py-24 bg-white dark:bg-[#18181b] min-h-screen bg-gradient-to-br ${
          THEME_COLOR === "purple"
            ? "from-purple-50 via-purple-100 to-purple-200 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950"
            : "from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#18181b]"
        } flex flex-col`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Showcase Card 1 */}
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
              <Image
                src="/next.svg"
                alt="Project 1"
                width={80}
                height={32}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Next.js Landing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Modern landing page built with Next.js and Tailwind CSS.
              </p>
            </div>
            {/* Showcase Card 2 */}
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
              <Image
                src="/vercel.svg"
                alt="Project 2"
                width={80}
                height={32}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Vercel Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Dashboard UI for deployment management and analytics.
              </p>
            </div>
            {/* Showcase Card 3 */}
            <div className="bg-gray-100 dark:bg-[#23272f] rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-xl transition">
              <Image
                src="/globe.svg"
                alt="Project 3"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Global Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Scalable platform for international audiences.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            Endpoint: <span className="font-mono">{API_ENDPOINT}</span>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="w-full py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} StudioVA. All rights reserved.
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>StudioVA - Creative Digital Studio (Staging)</title>
        <meta
          name="description"
          content="Creative digital studio for brands, products, and experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tambahkan meta theme-color untuk staging */}
        <meta name="theme-color" content={THEME_COLOR === "purple" ? "#a78bfa" : "#2563eb"} />
      </Head>
      {/* Tambahkan meta tambahan di sini jika diperlukan */}
      <StudioBody />
    </>
  );
}
