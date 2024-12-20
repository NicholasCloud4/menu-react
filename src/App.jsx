import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuItem from "./components/Menu/MenuItem";

function App() {

  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map((sport) => {
            return (
              <MenuItem key={sport}>{sport}</MenuItem>
            )
          })}
        </MenuDropdown>
      </Menu>
    </>
  );
}

export default App;
