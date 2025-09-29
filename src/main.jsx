import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router";

import { AuthProvider } from "./auth/AuthContext";
// import { PageProvider } from "./layout/PageContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
