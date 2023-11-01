import Styles from "../../styles/rightPanel.module.css";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import AuditLogs from "../auditLogs/AuditLogs";
import PropTypes from "prop-types";

function RightPanel({ open }) {
  return (
    <div
      className={`${Styles.RightPanel} ${
        open ? "": Styles.slide
      }`}
    >
      <div className={Styles.header}>
        <h3>Audit Logs</h3>
        <p>
          Monitor any changes made to your project, schema and content with
          audit logs.
        </p>
        <a>
          Learn more <LaunchRoundedIcon style={{ fontSize: "small" }} />
        </a>
      </div>
      <div className={Styles.list}>
        <AuditLogs />
      </div>
    </div>
  );
}

RightPanel.propTypes = {
  open: PropTypes.bool,
};

export default RightPanel;
