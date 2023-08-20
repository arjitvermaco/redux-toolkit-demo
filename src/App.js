import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, reset } from "./store/CounterSlice";
import Cake from "./Cake";
import { loginUser } from "./store/UserSlice";
import Login from './Login';
import Dashboard from './Dashboard';
function App() {
  const count = useSelector((state)=> state.counter.value);
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();

  console.log("user data",user)

  return (
   <div>
    <h1>Counter Application</h1>
      {/* <h2>Current Count: {count}</h2> */}
      {/* <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button  onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button  onClick={()=>{dispatch(reset())}}>Reset</button> */}
      {user.name ? <Dashboard/>:<Login/>}

      <button onClick={()=>{dispatch(loginUser({name:"Arjit",email:"arjit@gmail.com"}))}}>
        Login User
      </button>
   </div>
  );
}

export default App;
