import type { Dispatch, SetStateAction } from "react";

export type StepType = { stepNum: number; stepName: string; path: string };

export type PlanType = {
  name: SubscriptionType["plan"];
  monthly: number;
  yearly: number;
  img: string;
};

export type AddonType = {
  name: addonsType;
  monthly: number;
  yearly: number;
  description: string;
};

export type formInputsType = {
  name: string;
  email: string;
  mobile: string;
};

//////////////////

type addonsType = "Online Service" | "Larger Storage" | "Customizable Profile";

export type SubscriptionType = {
  name: string;
  email: string;
  mobile: string;
  plan: "Arcade" | "Advanced" | "Pro";
  cycle: "monthly" | "yearly";
  addons: addonsType[];
};

export type SubContextValue = {
  subscription: SubscriptionType;
  setSubscription: Dispatch<SetStateAction<SubscriptionType>>;
};
