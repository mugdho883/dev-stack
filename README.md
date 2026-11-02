# 🚀 Dev Stack

A small React app where you browse popular technologies and build your own ideal development stack.

## 📖 Description
Dev Stack lets developers explore frontend, backend, database, language, styling and DevOps tools, then pick the ones they like and collect them in a "Your Stack" panel.

## 🛠️ Technologies Used
- React.js (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- React-Toastify
- JSON (technology data)

## ✨ Features
1. **Add / Remove Stack** – add technologies to your stack, remove one by one or clear everything with "Remove All". Duplicates are blocked with a warning toast.
2. **Toast Notifications & Loading State** – react-toastify alerts for every action, plus a spinner while the JSON loads.
3. **Responsive Gradient UI** – sticky navbar, mobile hamburger menu, and a card grid that adapts (1 / 2 / 3 columns). One shared gradient controls the brand theme.

## ▶️ Run Locally
```bash
npm install
npm run dev
```

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes UI code easier to read and write, and Vite/Babel converts it into normal JavaScript.

**2. What is the difference between props and state?**
Props are data passed from a parent to a child and are read-only. State is data owned by a component that can change, and changing it re-renders the component.

**3. What does the `useState` hook do, and where did you use it?**
It gives a component a state variable and a function to update it. I used it in `App.jsx` for `technologies`, `loading` and `stack`, and in `Navbar.jsx` for the mobile menu `open` state.

**4. What does the `useEffect` hook do, and why was it needed to load the JSON?**
It runs side effects after render. Fetching data is a side effect, so I used `useEffect` with an empty dependency array to fetch `technologies.json` once when the app loads.

**5. Why does every item in a `.map()` list need a unique `key`?**
React uses the key to know which item changed, was added or removed, so it can update the list efficiently and correctly. I used each technology's `id`.

**6. What is conditional rendering?**
Showing different UI depending on a condition. In `YourStack.jsx`, if `stack.length === 0` I show the "Your stack is empty." message, otherwise I show the list of selected items.

**7. How do you pass data from parent to child, and child to parent?**
Parent to child with props, e.g. `<TechCard tech={tech} />`. Child to parent by passing a function as a prop and calling it, e.g. `onAdd(tech)` in `TechCard`, which runs `handleAdd` inside `App`.
