import type { AddonType, PlanType, StepType } from "./types";

export const stepsData: StepType[] = [
  { stepNum: 1, stepName: "your info" },
  { stepNum: 2, stepName: "select plan" },
  { stepNum: 3, stepName: "add-ons" },
  { stepNum: 4, stepName: "summary" },
];

export const planData: PlanType[] = [
  { name: "Arcade", monthlyPrice: 9, yearlyPrice: 90, img: "icon-arcade.svg" },
  {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    img: "icon-advanced.svg",
  },
  { name: "Pro", monthlyPrice: 15, yearlyPrice: 150, img: "icon-pro.svg" },
];

export const addonsData: AddonType[] = [
  {
    name: "Online Service",
    monthlyPrice: 1,
    yearlyPrice: 10,
    description: "Access to multiplayer games",
  },
  {
    name: "Larger Storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
    description: "Extra 1TB of cloude storage",
  },
  {
    name: "Customizable profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    description: "Custom theme for your profile",
  },
];
