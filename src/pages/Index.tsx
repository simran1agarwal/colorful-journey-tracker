import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b">
        <h1 className="text-3xl font-bold text-center">2025 Wellness Tracker</h1>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;