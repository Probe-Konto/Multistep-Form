import Step from "./Step";
import { stepsData } from "../initialData";
import { useMatch } from "react-router";

export default function Steps() {
  const isStepsActive: boolean[] = [
    Boolean(useMatch("/multistep-form/info")),
    Boolean(useMatch("/multistep-form/plan")),
    Boolean(useMatch("/multistep-form/addon")),
    Boolean(useMatch("/multistep-form/summary")),
  ];

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

      <ul className="absolute top-4 left-1/2 flex -translate-x-1/2 flex-row gap-6 md:left-6 md:translate-x-0 md:flex-col">
        {stepsData.map((step) => {
          const isActive = isStepsActive[step.stepNum - 1];

          return (
            <li key={step.stepNum} className="flex items-center">
              <Step
                stepNum={step.stepNum}
                stepName={step.stepName}
                active={isActive}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
