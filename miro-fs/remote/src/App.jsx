import { render } from "solid-js/web";

import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>my front end remote with counter</div>
  
    <Counter/>
  </div>
);
render(App, document.getElementById("app"));
