import { BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./router";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router?.map((item, index) => (
          <Route
            key={index + item?.path}
            path={item?.path}
            element={<item.component />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
