import React from 'react';

export default function CoreConcept(props) {
 return (
    <li>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}


// function CoreConcept({image, title, description}) {
//  return (
//     <li>
//       <img src={image}></img>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }
