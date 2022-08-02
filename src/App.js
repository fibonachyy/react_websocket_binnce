import SocketHook from "./Hook/SocketHook";
import PriceList from "./Components/PriceList/PriceList";
import "./App.css";
function App() {
  const [data] = SocketHook();
  return <PriceList data={data} />;
}
export default App;
