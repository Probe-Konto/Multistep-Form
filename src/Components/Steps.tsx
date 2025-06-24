import Step from "./Step";
import { stepsData } from "../initialData";

export default function Steps() {
  return (
    <div className="relative md:shrink-0">
      <picture>
        <source
          media="(max-width: 800px)"
          srcSet="/images/bg-sidebar-mobile.svg"
        />

        <img
          alt="background image"
          src="/images/bg-sidebar-desktop.svg"
          className="h-[30vh] w-screen object-cover md:h-auto md:w-full"
        />
      </picture>

      <ul className="absolute top-8 left-1/2 flex -translate-x-1/2 flex-row gap-6 md:left-6 md:translate-x-0 md:flex-col">
        {stepsData.map((s) => (
          <li key={s.stepNum} className="flex items-center">
            <Step stepNum={s.stepNum} stepName={s.stepName} />
          </li>
        ))}
      </ul>
    </div>
  );
}
