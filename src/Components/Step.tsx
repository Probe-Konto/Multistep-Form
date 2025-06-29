export default function Step({
  stepNum,
  stepName,
  active,
}: {
  stepNum: number;
  stepName: string;
  active: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white ${active ? "bg-sky-200 text-black" : "bg-transparent text-white"}`}
      >
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
