import React from 'react'

export default function DynamicStyling() {
  const [isShow,setShow] = React.useState(false);
    function handleStyle(){
        setShow(true);
    }
    return (
        <div>
            <p className= {isShow? 'active':''}>Style me!</p>
            <button onClick={handleStyle}>Toggle style</button>
        </div>
    );
}
// body {
//     font-family: sans-serif;
//     margin: 0;
//     padding: 3rem;
//     background-color: #2d2c2c;
//     color: #959090;
//     text-align: center;
// }

// .active {
//     color: red;
// }

// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// Here's how the finished app should look like BEFORE the button was clicked:
