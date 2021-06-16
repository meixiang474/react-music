import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import store from "@/store";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
