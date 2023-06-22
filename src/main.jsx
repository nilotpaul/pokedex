import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SWRConfig } from "swr";
import Header from "./components/Header.jsx";

const fetcher = async (urls) => {
  const res = await fetch(urls);

  return res.json();
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <Header />
    <App />
  </SWRConfig>
);
