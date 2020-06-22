import React, { Suspense } from 'react';

//const OtherComponent = React.lazy(() => import('./OtherComponent'));
//const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function AboutComponent() {
  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
        <section>
        {/* //   <OtherComponent />
        //   <AnotherComponent />
        <p>About Component</p> */}
        </section>
       </Suspense>
       ABOUT PAGE
    </div>

  );
}