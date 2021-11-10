import React, { useState } from "react";
import { useRoutes, A } from "hookrouter";
import "./styles.css";
import routes from "./router";
import NoPageFound from "./components/NoPageFound";
import image1 from './img/Background.jpg'
import image2 from './img/david-marcu.jpg'
import image3 from './img/johannes-plenio.jpg'
import image4 from './img/johannes-plenio-1.jpg'


const App = () => {
  const routeResult = useRoutes(routes);
  const [image, setImage] = useState(image1);

  const handleClick = (props) => {
    setImage(props);
    console.log(image);
  }


  return (
    <div className='App' style={{ backgroundImage: `url(${image})`}}>
        <div className='links'>
            <A href="/nature" >
                <button className='button1' type="button" onClick={() => handleClick(image2)} >
                    Nature
                </button>
            </A>
            &nbsp;&nbsp;&nbsp;
            <A href="/fantasy">
                <button className='button2' type="button" onClick={() => handleClick(image3)} >
                    Fantasy
                </button>
            </A>
            &nbsp;&nbsp;&nbsp;
            <A href="/other">
                <button className='button3' type="button" onClick={() => handleClick(image4)}>
                    Other
                </button>
            </A> <br />
            {routeResult || <NoPageFound />}
        </div>
    </div>
  );
}
export default App;

