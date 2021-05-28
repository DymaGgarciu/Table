import React from "react";
import classes from "./PopupGoodInfo.module.css";

const PopupGoodInfo = ({ showPopup, onClosePopup }) => {

  return (
    <div>
      <div
        onClick={() => onClosePopup()}
        className={classes.popup_overlay}
      ></div>
      <div className={classes.popup}>
        <button
          onClick={() => onClosePopup()}
          className={classes.close_popup}
        ></button>
        <div className={classes.popup__content}>
          <div>
            <span>Title:</span> <span>{showPopup.title}</span>
          </div>
          <div>
            <span>Author:</span> {showPopup.author}
          </div>
          <div>
            <span>Price:</span> <span>{showPopup.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupGoodInfo;
