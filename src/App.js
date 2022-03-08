import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MyPage from "./pages/Section/MyPage/MyPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <MyPage />
      </div>
    </div>
  );
}

export default App;
