import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BackgroundImage from "./assets/background.jpg";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <body
      className="h-screen max-h-screen max-w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <App />
    </body>
  </StrictMode>,
);
