import React, { useState } from "react";
import { Input } from "./../../elements/Input/Input";
import Button from "./../../elements/Button/Button";
import classes from "./AddGoodForm.module.css";

const initialGood = {
  title: "",
  author: "",
  price: "",
};

const AddGoodFrom = (props) => {
  const { onSubmit } = props;
  const [good, setGoodsValue] = useState(initialGood);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(good);
    setGoodsValue(initialGood);
  };
  const handleInputChange = (name, value) => {
    setGoodsValue({ ...good, [name]: value });
  };

  const enabled =
    good.title.length > 0 && good.author.length > 0 && good.price.length > 0;

  return (
    <form onSubmit={handleFormSubmit}>
      <Input onChange={handleInputChange} name={"title"} value={good.title} />
      <Input onChange={handleInputChange} name={"author"} value={good.author} />
      <Input onChange={handleInputChange} name={"price"} value={good.price} />
      <Button type="submit" disabled={!enabled}>
        Add
      </Button>
    </form>
  );
};

export default AddGoodFrom;
