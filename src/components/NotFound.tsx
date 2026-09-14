function NotFound() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-200 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-slate-500">
          Error 404
        </p>

        <h1 className="text-8xl font-bold mt-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-3 max-w-md">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default NotFound;