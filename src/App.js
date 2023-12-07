import Dashboard from "./pages/Dashboard/Dashboard";
import NavBar from "./pages/Navs/Navbar";
import SideNav from "./pages/Navs/SideNav";
import "./index.scss"


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Page">
        <SideNav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
