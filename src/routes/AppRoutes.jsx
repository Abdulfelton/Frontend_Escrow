import React from "react";
import { Routes, Route } from "react-router-dom";
import MockLanding from "../features/auth/pages/MockLanding";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MockLanding />} />  {/* Landing page */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;

// import React from "react";
// import MockLanding from "../features/auth/pages/MockLanding.jsx";

// const AppRoutes = () => {
//   return <MockLanding />;
// };

// export default AppRoutes;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MockLanding from "../features/auth/pages/MockLanding.jsx";
// import Login from "../features/auth/pages/Login.jsx";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<MockLanding />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


