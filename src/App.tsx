// import React from "react";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";
// // import Header from "./Components/Header";

// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       <Body />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import styled from "styled-components";

//

const App = () => {
  return (
    <div>
      
<House>
  <Main>
    
<Block></Block>
<Block3></Block3>
<h1>BNXN.</h1>
  </Main>
</House>
    
    </div>
  );
};

export default App;


const Block3 =styled.div`
width: 40%;
height: 58vh;
background-color: #ff0000;
justify-content: center;

`
const Block =styled.div`
width: 40%;
height: 58vh;
background-color: #000;
justify-content: center;
/* position: absolute; */
`
const House =styled.div`
width: 100%;
height: 100vh;
background-color: red;
justify-content: center;
display: flex;
align-items: center;

`
const Main =styled.div`width: 100%;
width: 90%;
height: 58vh;
background-color: blue;
justify-content: space-between;
display: flex;
align-items: center;
position:absolute;
`