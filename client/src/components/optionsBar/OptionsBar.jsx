import React from "react";
import Styles from "../../styles/Optionsbar.module.css";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import PinterestIcon from "@mui/icons-material/Pinterest";

function OptionsBar() {
  return (
    <div className={Styles.optionsBar}>
      <div className={Styles.optionsBar_top}>
        <button>
          <PinterestIcon />
        </button>
        <button>
          <LogoDevIcon />
        </button>
        <button>
          <LayersOutlinedIcon />
        </button>
        <button>
          <EditNoteOutlinedIcon />
        </button>
        <button>
          <FilePresentOutlinedIcon />
        </button>
        <button>
          <PlayArrowIcon />
        </button>
      </div>
      <div className={Styles.optionsBar_bottom}>
        <button>
          <LockResetOutlinedIcon />
        </button>
        <button>
          <TuneOutlinedIcon color="primary" />
        </button>
        <button>
          <DescriptionOutlinedIcon />
        </button>
        <button>
          <QuestionAnswerOutlinedIcon />
        </button>
        <button>
          <PermIdentityOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default OptionsBar;
