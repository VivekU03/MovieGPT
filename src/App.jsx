
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utills/appStore";
import Footer from "./components/Footer";

function App() {

  return (
    <Provider store={appStore}>
      <div className="min-h-screen flex flex-col">
        <Body/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App
