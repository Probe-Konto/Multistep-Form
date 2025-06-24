import type { StepType } from "../types";

export default function Step({ stepNum, stepName }: StepType) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bee1ff]">
        {stepNum}
      </div>

      <div className="hidden md:block">
        <p className="text-xs text-slate-400">
          STEP &nbsp;
          <span>{stepNum}</span>
        </p>
        <p className="text-sm font-medium text-white uppercase">{stepName}</p>
      </div>
    </div>
  );
}
