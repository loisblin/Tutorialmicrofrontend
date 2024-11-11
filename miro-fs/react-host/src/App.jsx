import React,{useRef,useEffect} from "react";
import ReactDOM from "react-dom/client";

import counterWrapper from "remote/counterWrapper";
import "./index.scss";

const App = () => {
  const divRef = useRef(null);
  useEffect(()=>{
    counterWrapper(divRef.current)
  },[]);
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-host</div>
    <div ref={divRef}></div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)