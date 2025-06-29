import { useContext } from "react";

import { SubContext } from "../SubContext";

export default function Switch() {
  const { subscription } = useContext(SubContext);
  return (
    <div
      className={`bg-darkBlue flex h-5 w-12 cursor-pointer items-center rounded-full px-0.5 ${subscription.cycle === "monthly" ? "justify-start" : "justify-end"}`}
    >
      <div className="h-3.5 w-3.5 rounded-full bg-white"></div>
    </div>
  );
}
