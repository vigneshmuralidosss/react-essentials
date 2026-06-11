import React from 'react'

export default function conditionalRendering() {
  const [isShow, setShow] = React.useState(false);
    function handleDisplay(){
        setShow(false);
    }
    function handleDelete(){
        setShow(true)
    }
    let display = null;
    if(isShow){
        display = <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleDisplay}>Proceed</button>
        </div>
    }
    return (
      <div>
        {display}
        <button onClick={handleDelete}>Delete</button>
      </div>    
    );
}

// Conditional Content
// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

// The finished app should display this UI, if the <button> has not been clicked yet:
