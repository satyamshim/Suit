import React from 'react';

const Card = ({ name, quality, image}) => {
  return (
       <div className ='tc bg-light-green dib br7 par6 ma2 grow bw2 shadow-5 w-20 mv4 w-20 w-20-m  w-20 w-40-m w-20-l mw5 '>
        
        <div>
           <article> {image} </article>
           <h2> {name} </h2>
           <p> {quality} </p>
           
        </div>
       </div>
 );
}

export default Card;