import { useState } from "react";
import Steps from "./Components/Steps";
import { Outlet } from "react-router";
import { initSub } from "./initialData";
import { SubContext } from "./SubContext";

function App() {
  const [subscription, setSubscription] = useState(initSub);

  return (
    <SubContext value={{ subscription, setSubscription }}>
      <main className="min-h-screen items-center justify-center bg-blue-50 md:flex">
        <section className="flex min-h-screen flex-col items-center gap-16 bg-blue-50 md:min-h-auto md:flex-row md:rounded-xl md:bg-white md:p-4">
          <Steps />

          <Outlet />
        </section>
      </main>
    </SubContext>
  );
}

export default App;
