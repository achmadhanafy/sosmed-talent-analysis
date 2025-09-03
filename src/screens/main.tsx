import AnalysisForm from "@/components/AnalysisForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <Header />
        <div className="mt-12">
          <AnalysisForm />
        </div>
      </div>
    </main>
  );
}
