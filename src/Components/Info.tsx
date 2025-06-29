import { useContext, useRef, useState } from "react";
import { Form, useNavigate } from "react-router";
import { SubContext } from "../SubContext";

export default function Info() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const { subscription, setSubscription } = useContext(SubContext);

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    mobile: true,
  });

  function validateInput(
    event: React.FocusEvent<HTMLInputElement, Element>,
    inputId: string,
  ) {
    setValidation((prev) => ({
      ...prev,
      [inputId]: event.target.validity.valid,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //if any input is invalid, return
    if (Object.values(validation).some((item) => item === false)) {
      return;
    }

    //If any field is empty, mark it invalid and return (happens when users immediately click submit)
    if (!subscription.name || !subscription.email || !subscription.mobile) {
      setValidation((prev) => ({
        ...prev,
        name: Boolean(subscription.name),
        email: Boolean(subscription.email),
        mobile: Boolean(subscription.mobile),
      }));
      return;
    }

    setSubscription((prev) => ({
      ...prev,
      name: subscription.name,
      email: subscription.email,
      mobile: subscription.mobile,
    }));

    navigate("/multistep-form/plan");
  }

  return (
    <>
      <section className="z-10 -mt-[45%] flex w-[90vw] flex-col rounded-2xl bg-white px-8 py-4 md:mt-0 md:h-[75vh] md:w-[35vw] md:gap-2 md:rounded-none md:py-10">
        <h1 className="text-darkBlue text-3xl font-bold">Personal info</h1>
        <p className="text-md text-slate-500">
          Please provide your name, email, and phone number
        </p>

        <Form
          ref={formRef}
          noValidate
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-2 pt-6"
        >
          <label htmlFor="name" className="flex justify-between text-sm">
            <span className="text-darkBlue">Name</span>
            <span
              className={`font-medium text-red-600 ${validation.name ? "hidden" : "block"}`}
            >
              Invalid name
            </span>
          </label>

          <input
            minLength={3}
            maxLength={20}
            name="name"
            id="name"
            required
            type="text"
            placeholder="e.g. Adam Smith"
            value={subscription.name}
            onChange={(e) =>
              setSubscription({ ...subscription, name: e.target.value })
            }
            onBlur={(e) => validateInput(e, "name")}
            className={`text-darkBlue mb-4 rounded-md border p-2 ${validation.name ? "border-slate-300" : "border-red-600 outline-1 outline-red-600"}`}
          ></input>

          <label htmlFor="email" className="flex justify-between text-sm">
            <span className="text-darkBlue">Email</span>
            <span
              className={`font-medium text-red-600 ${validation.email ? "hidden" : "block"}`}
            >
              Invalid Email
            </span>
          </label>

          <input
            id="email"
            name="email"
            required
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            placeholder="e.g. someone@something.com"
            className={`text-darkBlue mb-4 rounded-md border p-2 ${validation.email ? "border-slate-300" : "border-red-600 outline-1 outline-red-600"}`}
            value={subscription.email}
            onChange={(e) => {
              setSubscription({ ...subscription, email: e.target.value });
            }}
            onBlur={(e) => validateInput(e, "email")}
          ></input>

          <label htmlFor="mobile" className="flex justify-between text-sm">
            <span className="text-darkBlue">mobile</span>
            <span
              className={`font-medium text-red-600 ${validation.mobile ? "hidden" : "block"}`}
            >
              Invalid mobile
            </span>
          </label>

          <input
            id="mobile"
            name="mobile"
            required
            pattern="(\+?\d{1,3}\s?)?\d{10}"
            type="tel"
            placeholder="e.g. 0101234567 or +30123456789"
            value={subscription.mobile}
            onChange={(e) =>
              setSubscription({ ...subscription, mobile: e.target.value })
            }
            onBlur={(e) => validateInput(e, "mobile")}
            className={`text-darkBlue mb-4 rounded-md border p-2 ${validation.mobile ? "border-slate-300" : "border-red-600 outline-1 outline-red-600"}`}
          ></input>

          <button
            type="submit"
            className="bg-darkBlue ms-auto mt-10 hidden cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800 md:block"
          >
            Next Step
          </button>
        </Form>
      </section>

      <section className="sticky bottom-0 flex max-h-[7rem] w-screen justify-end bg-white px-8 py-4 md:hidden">
        <button
          onClick={() => formRef.current?.requestSubmit()}
          type="submit"
          className="bg-darkBlue cursor-pointer rounded-md px-6 py-2 text-white hover:bg-blue-800"
        >
          Next Step
        </button>
      </section>
    </>
  );
}
