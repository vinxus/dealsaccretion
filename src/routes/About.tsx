import React, { Suspense } from 'react';

//const OtherComponent = React.lazy(() => import('./OtherComponent'));
//const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

export default function AboutComponent() {
  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
        <section>
        {/* //   <OtherComponent />
        //   <AnotherComponent />
        <p>About Component</p> */}
        </section>
       </Suspense>
       <h6>What we do</h6>
       <p>
                We specialize in business acquisition. We allow business owners to finally live the life of their dreams and enjoy the well deserved freedom. By building on their legacy and reputation before taking it into greater heights.
We have a very strong,reliable,efficient and experienced team with more than 60 years combined experience. We have a strong belief and passion for impacting the world positively while delivering on our humanitarian responsibilities.
We aim to provide a WIN/WIN scenario to both sellers and buyers to facilitate a smooth exit or a new beginning.
       </p>

    </div>

  );
}