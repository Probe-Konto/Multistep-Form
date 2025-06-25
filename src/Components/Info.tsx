import { Form } from "react-router";

export default function Info() {
  return (
    <>
      <section className="z-10 -mt-[25vh] flex w-[90vw] flex-col gap-2 rounded-2xl bg-white px-8 py-10 md:mt-0 md:w-full md:rounded-none">
        <h1 className="text-darkBlue text-3xl font-bold">Personal info</h1>
        <p className="text-md text-slate-500">
          Please provide your name, email, and phone number
        </p>

        <form noValidate method="post" className="flex flex-col gap-2 pt-6">
          <label htmlFor="name" className="text-darkBlue text-sm">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Adam Smith"
            className="text-darkBlue mb-4 rounded-md border border-slate-300 p-2"
          ></input>

          <label htmlFor="email" className="text-darkBlue text-sm">
            Email
          </label>

          <input
            required
            type="email"
            placeholder="e.g. someone@something.com"
            className="text-darkBlue mb-4 rounded-md border border-slate-300 p-2"
          ></input>

          <label htmlFor="email" className="text-darkBlue text-sm">
            Mobile number
          </label>

          <input
            required
            pattern="(\+?\d{1,3}\s?)?\d{10}"
            type="tel"
            placeholder="e.g. 0101234567 or +30123456789"
            className="text-darkBlue rounded-md border border-slate-300 p-2"
          ></input>

          <button
            type="submit"
            className="bg-darkBlue ms-auto mt-20 hidden cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800 md:block"
          >
            Next Step
          </button>
        </form>
      </section>

      <section className="absolute bottom-0 flex w-screen justify-end bg-white px-8 py-4 md:hidden">
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
