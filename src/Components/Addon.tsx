import { useContext } from "react";
import { addonsData } from "../initialData";
import { SubContext } from "../SubContext";
import { useNavigate } from "react-router";

export default function Addon() {
  const { subscription, setSubscription } = useContext(SubContext);
  const navigate = useNavigate();

  return (
    <>
      <section className="z-10 -mt-[45%] flex w-[90vw] flex-col gap-3 rounded-2xl bg-white px-8 py-6 md:mt-0 md:h-[75vh] md:w-[35vw] md:rounded-none md:py-10">
        <h1 className="text-darkBlue text-3xl font-bold">Pick add-ons</h1>
        <p className="text-md text-slate-500">
          Add-ons help enhance your gaming experience
        </p>

        <ul className="flex flex-col gap-4 pt-4">
          {addonsData.map((a, index) => (
            <li
              key={index}
              className={`xs:gap-4 flex items-center rounded-md border border-slate-300 hover:border-blue-800 has-checked:border-blue-800 ${subscription.addons.includes(a.name) ? "bg-indigo-50" : ""}`}
            >
              <input
                type="checkbox"
                id={String(index)}
                name={a.name}
                className="ms-4 h-4 w-4 checked:bg-indigo-700 md:h-5 md:w-5"
                checked={subscription.addons.includes(a.name)}
                onChange={() =>
                  setSubscription((prev) => ({
                    ...prev,
                    addons: prev.addons.includes(a.name)
                      ? prev.addons.filter((item) => item !== a.name) // Remove if exists
                      : [...prev.addons, a.name], // Add if missing
                  }))
                }
              ></input>

              <label
                htmlFor={String(index)}
                className="xs:gap-8 flex grow items-center justify-between gap-3 p-4"
              >
                <p className="flex flex-col">
                  <span className="text-darkBlue text-sm text-nowrap md:text-base">
                    {a.name}
                  </span>
                  <span className="max-w-[75%] text-xs text-slate-500 md:max-w-full md:text-sm">
                    {a.description}
                  </span>
                </p>

                <span className="xs:me-4 text-nowrap text-indigo-500">
                  {"+$" +
                    String(a[subscription.cycle]) +
                    "/" +
                    String(subscription.cycle === "monthly" ? "mo" : "yr")}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className="hidden justify-between md:flex">
          <button
            className="cursor-pointer text-slate-500"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <button
            type="button"
            className="bg-darkBlue mt-4 cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
            onClick={() => navigate("/Multistep-Form/summary")}
          >
            Next Step
          </button>
        </div>
      </section>

      <section className="mt-auto flex max-h-[7rem] w-screen justify-between bg-white px-8 py-4 md:hidden">
        <button
          className="cursor-pointer text-slate-500"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        <button
          type="button"
          className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
          onClick={() => navigate("/Multistep-Form/summary")}
        >
          Next Step
        </button>
      </section>
    </>
  );
}
