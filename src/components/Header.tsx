export default function Header() {
  return (
    <section className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        TikTok Talent Analysis <span className="text-blue-600">Powered by AI</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Paste a TikTok profile or video URL, add your product, 
        and discover if the talent is the right match.
      </p>
    </section>
  );
}