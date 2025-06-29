import { useState } from "react";
import Steps from "./Components/Steps";
import { Outlet } from "react-router";
import { initSub } from "./initialData";
import { SubContext } from "./SubContext";

function App() {
  const [subscription, setSubscription] = useState(initSub);

  return (
    <SubContext value={{ subscription, setSubscription }}>
      <main className="max-h-screen items-center justify-center bg-blue-50 md:max-h-[auto] md:min-h-screen">
        <section className="flex flex-col items-center gap-16 bg-blue-50 md:flex-row md:rounded-xl md:bg-white md:p-4">
          <Steps />

          <Outlet />
        </section>
      </main>
    </SubContext>
  );
}

export default App;
