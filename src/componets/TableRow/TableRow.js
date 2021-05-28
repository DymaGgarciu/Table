import React from "react";
import Button from "./../../elements/Button/Button";
import { useState } from "react";
import { Input } from "./../../elements/Input/Input";
import classes from "./TableRow.module.css";

const TableRow = ({ good, onEdit, index, onDelete, onView }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [updatedGood, setUpdatedGood] = useState(good);

  const handleIsEdit = (event) => {
    event.stopPropagation();
    setIsEdit(!isEdit);
  };

  const handleInputChanges = (name, value) => {
    setUpdatedGood({ ...updatedGood, [name]: value });
  };

  const handleSubmit = (event) => {
    onEdit(index, updatedGood);
    setIsEdit(!isEdit);
  };
  const handleDelete = (event) => {
    onDelete(index);
  };

  const handleShowView = (event) => {
    event.stopPropagation();
    onView(index);
  };

  return (
    <tr>
      <td>
        {isEdit ? (
          <Input
            name={"title"}
            onChange={handleInputChanges}
            value={updatedGood.title}
          />
        ) : (
          updatedGood.title
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            name={"author"}
            onChange={handleInputChanges}
            value={updatedGood.author}
          />
        ) : (
          updatedGood.author
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            name={"price"}
            onChange={handleInputChanges}
            value={updatedGood.price}
          />
        ) : (
          updatedGood.price
        )}
      </td>
      <td>
        {!isEdit ? (
          <Button onClick={handleIsEdit}> Edit</Button>
        ) : (
          <Button onClick={handleSubmit}> Save </Button>
        )}

        <Button onClick={handleShowView}>View</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
};

export default TableRow;
