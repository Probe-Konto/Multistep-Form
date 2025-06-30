import { useContext } from "react";
import { SubContext } from "../SubContext";
import { useNavigate } from "react-router";
import { addonsData, planData } from "../initialData";

export default function Summary() {
  const { subscription } = useContext(SubContext);
  const navigate = useNavigate();

  const billingCycle = subscription.cycle === "monthly" ? "mo" : "yr";

  const planPrice = planData.find((el) => el.name === subscription.plan)?.[
    subscription.cycle
  ] as number;

  //Array of addon Prices
  const addonsPrice = subscription.addons.map(
    (el) => addonsData.find((addon) => addon.name === el)?.[subscription.cycle],
  );

  const total = addonsPrice.reduce(
    (acc: number, curr) => acc + (curr ?? 0),
    planPrice,
  );

  return (
    <>
      <section className="z-10 -mt-[45%] flex w-[90vw] flex-col gap-8 rounded-2xl bg-white px-8 py-6 md:mt-0 md:h-[75vh] md:w-[35vw] md:rounded-none md:py-10">
        <div className="">
          <h1 className="text-darkBlue pb-4 text-3xl font-bold">
            Finishing up
          </h1>
          <p className="text-md text-slate-500">
            Double-check everything before confirming
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-4">
          <div className="m-2 flex items-center justify-between border-b border-b-slate-300 pb-4">
            <div>
              <p className="text-darkBlue">
                <span className="">{subscription.plan}</span>
                <span className="">({subscription.cycle})</span>
              </p>
              <button
                type="button"
                onClick={() => navigate("/Multistep-Form/plan")}
                className="cursor-pointer text-sm text-slate-500 underline hover:text-indigo-500"
              >
                Change
              </button>
            </div>

            <p className="text-darkBlue">
              {`$${planPrice}/${billingCycle}
                  `}
            </p>
          </div>

          <div className="m-2 flex flex-col gap-4 pt-4">
            {subscription.addons.map((el, index) => (
              <p key={el} className="flex justify-between text-sm">
                <span className="text-slate-500">{el}</span>
                <span className="text-darkBlue">
                  +${addonsPrice[index]}/{billingCycle}
                </span>
              </p>
            ))}
          </div>
        </div>

        <p className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Total ({subscription.cycle})
          </span>
          <span className="text-lg font-bold text-indigo-500">
            +$ {total}/{billingCycle}
          </span>
        </p>

        <div className="hidden justify-between md:mt-8 md:flex">
          <button
            className="cursor-pointer text-slate-500"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <button
            type="button"
            className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
            onClick={() => navigate("/Multistep-Form/thanks")}
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
          onClick={() => navigate("/Multistep-Form/thanks")}
        >
          Next Step
        </button>
      </section>
    </>
  );
}
