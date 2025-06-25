export default function Summary() {
  return (
    <>
      <section className="z-10 -mt-[25vh] flex w-[90vw] flex-col gap-8 rounded-2xl bg-white px-8 py-6 md:mt-0 md:w-[35vw] md:rounded-none md:py-10">
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
                <span className="">Arcade</span>
                <span className="">(Monthly)</span>
              </p>
              <a
                href="#"
                className="text-sm text-slate-500 underline hover:text-indigo-500"
              >
                Change
              </a>
            </div>

            <p className="text-darkBlue">$9/mo</p>
          </div>

          <div className="m-2 flex flex-col gap-4 pt-4">
            <p className="flex justify-between text-sm">
              <span className="text-slate-500">Online Service</span>
              <span className="text-darkBlue">+$1/mo</span>
            </p>

            <p className="flex justify-between text-sm">
              <span className="text-slate-500">Larger Storage</span>
              <span className="text-darkBlue">+$2/mo</span>
            </p>
          </div>
        </div>

        <p className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Total (per Month)</span>
          <span className="text-lg font-bold text-indigo-500">+$12/mo</span>
        </p>

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
