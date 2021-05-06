import React, { useState } from 'react';
import data from './data';

function App() {
   const [count, setCount] = useState(0); //number of paragraphs to generate
   const [text, setText] = useState([]); //text of paragraphs

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <section className='section-center'>
         <h3>tired of boring lorem ipsum?</h3>
         <form action='' className='lorem-form' onSubmit={handleSubmit}>
            <label htmlFor='amount'>paragraphs:</label>
            <input
               type='number'
               name='amount'
               id='amount'
               value={count}
               onChange={(e) => setCount(e.target.value)}
            />
            <button type='submit' className='btn'>
               generate
            </button>
         </form>
         <article className='lorem-text'>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
               laudantium officia facilis obcaecati eos voluptatem?
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
               laudantium officia facilis obcaecati eos voluptatem?
            </p>
         </article>
      </section>
   );
}

export default App;
