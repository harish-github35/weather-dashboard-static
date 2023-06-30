import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SidebarContextProvider } from "./SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>
);
