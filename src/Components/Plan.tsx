import { useContext } from "react";
import { planData } from "../initialData";
import Switch from "./Switch";
import { SubContext } from "../SubContext";
import { useNavigate } from "react-router";

export default function Plan() {
  const { subscription, setSubscription } = useContext(SubContext);

  const navigate = useNavigate();

  return (
    <>
      <section className="z-10 -mt-[47%] flex w-[90vw] flex-col gap-3 rounded-2xl bg-white px-8 py-6 md:mt-0 md:h-[75vh] md:w-[35vw] md:rounded-none md:py-10">
        <h1 className="text-darkBlue text-3xl font-bold">Select your plan</h1>
        <p className="text-md text-slate-500">
          You have the option of monthly or yearly billing
        </p>

        <div className="mt-2 flex flex-col gap-4 md:mt-8 md:flex-row">
          {planData.map((p) => (
            <div
              key={p.name}
              className={`flex cursor-pointer gap-8 rounded-xl border p-4 hover:border-blue-800 md:w-36 md:flex-col md:justify-between ${subscription.plan === p.name ? "border-blue-800 bg-blue-50" : "border-slate-300"}`}
              onClick={() =>
                setSubscription((prev) => ({ ...prev, plan: p.name }))
              }
            >
              <img
                alt="icon image"
                src={"./images/" + p.img}
                className="h-8 w-8"
              />

              <div className="">
                <p className="text-darkBlue text-md font-medium">{p.name}</p>

                {subscription.cycle === "monthly" && (
                  <p className="text-sm text-nowrap text-slate-500">
                    {"$" + String(p.monthly) + "/mo"}
                  </p>
                )}

                {subscription.cycle === "yearly" && (
                  <div>
                    <p className="text-sm text-slate-500">
                      {"$" + String(p.yearly) + "/yr"}
                    </p>
                    <p className="text-darkBlue pt-2 text-sm text-nowrap">
                      2 months free
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-3 flex items-center justify-center gap-6 bg-blue-50 py-2 md:mt-6"
          onClick={() =>
            setSubscription((prev) => ({
              ...prev,
              cycle: prev.cycle === "monthly" ? "yearly" : "monthly",
            }))
          }
        >
          <span
            className={`${subscription.cycle === "monthly" ? "text-darkBlue" : "text-slate-500"}`}
          >
            Monthly
          </span>

          <Switch />

          <span
            className={`${subscription.cycle === "yearly" ? "text-darkBlue" : "text-slate-500"}`}
          >
            Yearly
          </span>
        </div>

        <div className="hidden justify-between md:mt-20 md:flex">
          <button
            className="cursor-pointer text-slate-500"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <button
            type="button"
            className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
            onClick={() => navigate("/Multistep-Form/addon")}
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
          onClick={() => navigate("/Multistep-Form/addon")}
        >
          Next Step
        </button>
      </section>
    </>
  );
}
