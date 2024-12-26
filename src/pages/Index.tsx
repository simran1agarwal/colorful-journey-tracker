import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent animate-fade-in">
          Simran's 2025 Journey
        </h1>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;