import {useState} from "react";
const [count, setCount] = useState(0);

const App = () => {
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 5)}>Increment by 5</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default App;