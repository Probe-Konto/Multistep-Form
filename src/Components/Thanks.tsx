export default function Thanks() {
  return (
    <section className="z-10 -mt-[45%] mb-10 flex w-[90vw] flex-col items-center justify-center gap-8 rounded-2xl bg-white px-8 py-6 text-center md:mt-0 md:w-[35vw] md:rounded-none md:py-10">
      <img
        src="./images/icon-thank-you.svg"
        alt="thank you icon"
        className="h-40 w-40"
      />
      <h1 className="text-darkBlue pb-4 text-3xl font-bold">Thank you!</h1>

      <p className="text-slate-500">
        Thank you for confirming your subscription! We’re thrilled to have you
        on board and hope you enjoy using our platform. If you have any
        questions or need assistance, don’t hesitate to reach out to our support
        team at support@something.com
      </p>
    </section>
  );
}
