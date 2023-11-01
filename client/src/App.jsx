import Styles from "./App.module.css";
import OptionsBar from "./components/optionsBar/OptionsBar";
import SlidingMenu from "./components/slidingMenu/SlidingMenu";
import RightPanel from "./components/rightPanel/RightPanel";
import * as React from "react";

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div className={Styles.main}>
        <OptionsBar />
        <SlidingMenu open={open} setOpen={setOpen} />
        <RightPanel open={open} />
      </div>
    </>
  );
}

export default App;
