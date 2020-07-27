import React, { Suspense } from 'react';

//const OtherComponent = React.lazy(() => import('./OtherComponent'));
//const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

export default function HomeComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
        {/* //   <OtherComponent />
        //   <AnotherComponent /> */}
        <p>About Component</p>
        </section>
       </Suspense>
    </div>

  );
}
// export class HomeComponent extends React.Component{
//     render(){
//         return (
//             <p>This is the home page</p>
//         );
//     }
// }