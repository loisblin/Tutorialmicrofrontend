import { createSignal } from "solid-js";

export default () => {
const [count, setCount]=createSignal(0);
return(
    <div class="bg-blue-900 text-white p-10">
        <div>counter than i want use in host </div>
        <div class="bg-red-900 text-white p-5">Count ={count()}</div>
        <button class="bg-blue-800" onClick={()=>setCount(count() + 1)}>add one</button>
    </div>
)

}