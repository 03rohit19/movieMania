import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Header2 from "./components/Header2";
function App() {
  return (
    <Provider store={appStore}>
      {/* <Header2 /> */}
      <Body />
    </Provider>
  );
}

export default App;
