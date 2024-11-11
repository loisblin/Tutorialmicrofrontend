import { createSignal } from "solid-js";

export default () => {
const [count, setCount]=createSignal(0);
return(
    <div class="bg-red-900 text-white p-5">
        <div>Count ={count()}</div>
        <button class="bg-blue-800" onClick={()=>setCount(count() + 1)}>add one</button>
    </div>
)

}