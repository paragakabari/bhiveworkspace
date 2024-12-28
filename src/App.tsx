import { RouterProvider } from "react-router-dom";
import { router } from "./rendereing";
import "../src/styles/index.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
