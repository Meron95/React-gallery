import React from "react";
import { useRoutes, A } from "hookrouter";
import "./styles.css";
import routes from "./router";
import NoPageFound from "./pages/NoPageFound";
import { usePath } from "hookrouter";


const App = () => {
  const routeResult = useRoutes(routes);
  const path =  usePath();
  const location = path.split('/')[1];


  return (
    <div className={'header ' + location }>
      <div className='links'>
        <A href="/nature" >
          <button className='button1' type="button" >
            Nature
          </button>
        </A>
          &nbsp;&nbsp;&nbsp;
        <A href="/fantasy">
          <button className='button2' type="button"  >
            Fantasy
          </button>
        </A>
          &nbsp;&nbsp;&nbsp;
        <A href="/other">
          <button className='button3' type="button" >
            Other
          </button>
        </A> <br />
        {routeResult || <NoPageFound />}
      </div>
    </div>
  );
}
export default App;

