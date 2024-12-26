import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 py-4 px-4 border-b bg-background/80 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent animate-fade-in">
          Simran's 2025 Journey
        </h1>
      </header>
      <main className="pb-safe-area-inset-bottom">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;