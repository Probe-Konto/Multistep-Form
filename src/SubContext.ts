import { createContext } from "react";
import { initSub } from "./initialData";
import type { SubContextValue } from "./types";

//Subscription Context
export const SubContext = createContext<SubContextValue>({
  subscription: initSub,
  setSubscription: () => {},
});
