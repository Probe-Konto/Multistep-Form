import { planData } from "../initialData";
import Switch from "./Switch";

export default function Plan() {
  return (
    <>
      <section className="z-10 -mt-[25vh] flex w-[90vw] flex-col gap-3 rounded-2xl bg-white px-8 py-6 md:mt-0 md:w-[35vw] md:rounded-none md:py-10">
        <h1 className="text-darkBlue text-3xl font-bold">Select your plan</h1>
        <p className="text-md text-slate-500">
          You have the option of monthly or yearly billing
        </p>

        <div className="mt-2 flex flex-col gap-4 md:mt-8 md:flex-row">
          {planData.map((p) => (
            <div
              key={p.name}
              className="flex cursor-pointer gap-8 rounded-xl border border-slate-300 p-4 hover:border-blue-800 md:w-36 md:flex-col md:justify-between"
            >
              <img
                alt="icon image"
                src={"/images/" + p.img}
                className="h-8 w-8"
              />

              <div className="">
                <p className="text-darkBlue text-md font-medium">{p.name}</p>
                <p className="text-sm text-nowrap text-slate-500">
                  {"$" + String(p.monthlyPrice) + "/mo"}
                </p>
                {/* 
              <p className="text-sm text-slate-500">
                {"$" + String(p.yearlyPrice) + "/yr"}
              </p>

              <p className="text-darkBlue text-sm">2 months free</p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-6 bg-blue-50 py-2 md:mt-6">
          <span className="text-darkBlue">Monthly</span>
          <Switch />
          <span className="text-slate-500">Yearly</span>
        </div>

        <div className="hidden justify-between md:mt-20 md:flex">
          <button className="cursor-pointer text-slate-500">Go Back</button>

          <button
            type="button"
            className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
          >
            Next Step
          </button>
        </div>
      </section>

      <section className="absolute bottom-0 flex w-screen justify-between bg-white px-8 py-4 md:hidden">
        <button className="cursor-pointer text-slate-500">Go Back</button>

        <button
          type="button"
          className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
        >
          Next Step
        </button>
      </section>
    </>
  );
}
