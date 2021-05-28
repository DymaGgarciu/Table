import React, { useState, useEffect } from "react";
import AddGoodFrom from "./../AddGoodForm/AddGoodForm";
import Table from "./../Table/Table";
import PopupGoodInfo from "./../PopupGoodInfo/PopupGoodInfo";

const GoodsTable = () => {
  const [goods, setGoods] = useState([]);
  const [showPopup, setShowPopup] = useState({ visiblePopup: false });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(goods),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }, [goods]);

  const handleGoodsSubmit = (good) => {
    fetch('https://jsonplaceholder.typicode.com/posts/100')
  .then((response) => response.json())
  .then((json) => console.log(json));
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

  const handleWiew = (index) => {
    const currentGood = goods.find((el, idx) => index === idx);

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
        onWiew={handleWiew}
      />
      {showPopup.visiblePopup && (
        <PopupGoodInfo showPopup={showPopup} onClosePopup={handleClosePopup} />
      )}
    </div>
  );
};

export default GoodsTable;
