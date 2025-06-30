# 🧾 Multi-Step Form

A responsive, modern multi-step form built with React 19, TypeScript, Tailwind CSS 4, and React Router v7.6.2 (Data Mode)

## 🛠 Tech Stack

- **Frontend Framework:** [React 19](https://react.dev)
- **Routing:** [React Router v7.6.2 (Data APIs)](https://reactrouter.com/en/main)
- **Build Tool:** [Vite](https://vitejs.dev)
- **Styling:** [Tailwind CSS v4.1](https://tailwindcss.com)
- **Type Checking:** [TypeScript](https://www.typescriptlang.org)
- **Linting/Formatting:** ESLint, Prettier, Tailwind Prettier Plugin
- **Validation:** Native Constraint Validation API with real-time feedback

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build and preview
npm run build
npm run preview
```

---

## 🔍 Features

- Multi-step navigation with React Router nested routes
- Default redirection from `/` to `/Multistep-Form/info`
- Form data managed with React Context API
- Real-time input validation (email, phone, required fields)
- Animated transitions using Tailwind classes
- Accessible and mobile-friendly layout

---

## 🧪 Validation Details

- Uses the native **Constraint Validation API** for HTML5 form input validation
- Custom feedback messages shown on blur and input
- Validates in real-time before moving between steps

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE)
