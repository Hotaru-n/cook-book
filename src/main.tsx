import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App.tsx";
import "/styles.scss";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
