import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Store/actions";

const Counter = () => {
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()
    return (
        <div>
            
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter