import { BrowserRouter, Route } from "react-router-dom";
import GoodsTable from "./componets/GoodsTable/GoodsTable";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={GoodsTable} />
      </div>
    </BrowserRouter>
  );
}

export default App;
