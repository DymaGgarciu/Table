import React, { useState } from "react";
import { Input } from "./../../elements/Input/Input";
import Button from "./../../elements/Button/Button";
import classes from "./AddGoodForm.module.css";

const AddGoodFrom = (props) => {
  const { onSubmit } = props;
  const [good, setGoodsValue] = useState({
    title: "",
    author: "",
    price: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault("");
    onSubmit(good);
    setGoodsValue({
      title: "",
      author: "",
      price: "",
    });
  };
  const handleInputChange = (name, value) => {
    setGoodsValue({ ...good, [name]: value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Input onChange={handleInputChange} name={"title"} value={good.title} />
      <Input onChange={handleInputChange} name={"author"} value={good.author} />
      <Input onChange={handleInputChange} name={"price"} value={good.price} />
      <Button type="submit"> Add </Button>
    </form>
  );
};

export default AddGoodFrom;
