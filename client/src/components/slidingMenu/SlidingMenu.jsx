import Styles from "../../styles/sliding.module.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import PropTypes from "prop-types";

export default function SlidingMenu({open,setOpen}) {
  const handleSlider = () => {
    setOpen(!open);
  };

  const Settings = [
    "Project",
    "API Access",
    "Billing",
    "Environment",
    "Content Stages",
    "Locales",
    "Audit Logs",
    "Team Members",
  ];

  return (
    <div
      className={`${Styles.SlidingMenu} ${
        open ? Styles.SlidingMenuOpen : Styles.SlidingMenuClose
      }`}
    >
      <div className={Styles.sliderSwitch}>
        <button onClick={handleSlider}>
          {open ? (
            <NavigateNextRoundedIcon style={{ fontSize: "medium" }} />
          ) : (
            <NavigateBeforeRoundedIcon style={{ fontSize: "medium" }} />
          )}
        </button>
      </div>
      <div className={Styles.slidingContent}>
        <h2>Settings</h2>
        <div className={Styles.list}>
          {Settings.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

SlidingMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
