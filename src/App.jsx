import Search from "./components/Search";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar title="Pinterest" />

      <div style={{ flex: 1 }}>
        <Search />
      </div>
    </div>
  );
}

export default App;
