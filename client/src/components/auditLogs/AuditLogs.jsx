import rows from "../../constants/data";
import Styles from "../../styles/auditLogs.module.css";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function AuditLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredRows = rows.filter((row) => {
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const filter = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  function getColorForAction(action) {
    switch (action) {
      case "UPDATE":
        return "#0174BE";
      case "DELETE":
        return "#C70039";
      case "UNPUBLISH":
        return "#CD5C08";
      case "CREATE":
      case "PUBLISH":
        return "green";
      default:
        return "black"; // Default color for other actions
    }
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.searchBox}>
        <FilterListIcon
          style={{ color: "#A9A9A9", fontSize: "medium", marginLeft: "0.3rem" }}
        />
        <input
          type="text"
          placeholder="Filter"
          value={searchQuery}
          onChange={filter}
        />
      </div>
      <div className={Styles.cardHeader}>
        <p style={{ width: "12%", color: "#eeeeee" }}>...</p>
        <p>User</p>
        <p>Entity ID</p>
        <p>Action</p>
        <p>Type</p>
        <p>Environment</p>
        <p>Timestamp</p>
      </div>
      <div className={Styles.cardsHolder}>
        {currentItems.map((row, index) => (
          <div key={index} className={Styles.card}>
            <div style={{ width: "8%", paddingRight: "0" }}>
              <img src={row.image} alt={row.name} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className={Styles.profile}
                style={{ padding: "0", alignItems: "flex-start" }}
              >
                <h4>{row.name}</h4>
                <p>{row.designation}</p>
              </div>
            </div>
            <div className={Styles.id}>
              <p>{row.id}</p>
            </div>
            <div
              style={{
                color: getColorForAction(row.action),
                fontWeight: "600",
              }}
            >
              {row.action}
            </div>
            <div>{row.type}</div>
            <div>{row.environment}</div>
            <div>{row.timestamp}</div>
          </div>
        ))}
      </div>
      <div className={Styles.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={currentPage === 1 ? Styles.disabled : ""}
        >
          Previous
        </button>
        <span>
          Page{" "}
          <input
            type="number"
            value={currentPage}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 1 && value <= totalPages) {
                setCurrentPage(value);
              }
            }}
          />{" "}
          of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? Styles.disabled : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
}
