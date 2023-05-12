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
import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routers/mainRoute";
import Section from "./components/Block/Section";

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={mainRoute} /> */}
      <Section />
    </div>
  );
};

export default App;
