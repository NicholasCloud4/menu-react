import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  /**
   * 1. MenuDropdown should render children instead of items
   * 2. MenuItem (new component you need to create) should also
   *    render children. Grab the <div className="menu-item">
   *    from MenuDropdown before deleting it if you want to be
   *    lazy :)
   * 3. Map over the `sports` array inside MenuDropdown in this
   *    file and render a MenuItem for each sport in the array
   */

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
