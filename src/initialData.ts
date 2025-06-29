import type { AddonType, SubscriptionType, PlanType, StepType } from "./types";

export const stepsData: StepType[] = [
  { stepNum: 1, stepName: "your info", path: "info" },
  { stepNum: 2, stepName: "select plan", path: "plan" },
  { stepNum: 3, stepName: "add-ons", path: "addon" },
  { stepNum: 4, stepName: "summary", path: "summary" },
];

export const planData: PlanType[] = [
  { name: "Arcade", monthly: 9, yearly: 90, img: "icon-arcade.svg" },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    img: "icon-advanced.svg",
  },
  { name: "Pro", monthly: 15, yearly: 150, img: "icon-pro.svg" },
];

export const addonsData: AddonType[] = [
  {
    name: "Online Service",
    monthly: 1,
    yearly: 10,
    description: "Access to multiplayer games",
  },
  {
    name: "Larger Storage",
    monthly: 2,
    yearly: 20,
    description: "Extra 1TB of cloude storage",
  },
  {
    name: "Customizable Profile",
    monthly: 2,
    yearly: 20,
    description: "Custom theme for your profile",
  },
];

export const initSub: SubscriptionType = {
  name: "",
  email: "",
  mobile: "",

  plan: "Arcade",
  cycle: "monthly",

  addons: ["Online Service", "Larger Storage"],
};
