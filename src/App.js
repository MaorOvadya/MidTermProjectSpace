import MainPage from "./Components/Main";
import HeaderPage from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App bg-red-400">
      <HeaderPage />
      <MainPage  />
    </div>
  );
}

export default App;
