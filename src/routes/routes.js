import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import Forms from "../components/Forms";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Forms />
      </RoutesDom>
    </BrowserRouter>
  );
};

export default Routes;
