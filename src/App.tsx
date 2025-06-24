import Steps from "./Components/Steps";
import Subscription from "./Components/Subscription";

function App() {
  return (
    <main className="min-h-screen items-center justify-center bg-blue-50 md:flex">
      <section className="flex flex-col items-center gap-16 bg-blue-50 md:flex-row md:rounded-xl md:bg-white md:p-4">
        <Steps />

        <Subscription />
      </section>
    </main>
  );
}

export default App;
