import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/slices/store";
import AppRoutes from "./redux/routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
