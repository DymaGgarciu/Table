import React, { useState } from "react";
import { Route } from "react-router-dom";

import AddGoodFrom from "./../AddGoodForm/AddGoodForm";
import Table from "./../Table/Table";
import PopupGoodInfo from "./../PopupGoodInfo/PopupGoodInfo";

const GoodsTable = (props) => {
  const [goods, setGoods] = useState([]);
  const [showPopup, setShowPopup] = useState({ visiblePopup: false });

  const handleGoodsSubmit = (good) => {
    setGoods([...goods, good]);
  };

  const handleEdit = (index, good) => {
    let newGoods = goods.filter((el, idx) => index !== idx);

    newGoods.push(good);
    setGoods(newGoods);
  };

  const handleDelete = (index) => {
    let deleteGoods = goods.filter((el, xd) => index !== xd);

    setGoods(deleteGoods);
  };

  const handleView = (index) => {
    const currentGood = goods.find((el, idx) => index === idx);

    props.history.push(`/good/id=${index}`);

    handleClosePopup(currentGood);
  };

  const handleClosePopup = (currentGood) => {
    setShowPopup({
      ...(currentGood ? currentGood : showPopup),
      visiblePopup: !showPopup.visiblePopup,
    });
  };

  return (
    <div>
      <AddGoodFrom onSubmit={handleGoodsSubmit} />
      <Table
        goods={goods}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
      {showPopup.visiblePopup && (
        <Route
          path={`/good/:id`}
          render={() => {
            return (
              <PopupGoodInfo
                showPopup={showPopup}
                onClosePopup={handleClosePopup}
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default GoodsTable;
