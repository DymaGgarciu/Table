import React from "react";
import TableRow from "../TableRow/TableRow";
import classes from "./Table.module.css";

const Table = ({ goods,onEdit, onDelete, onView }) => {
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th> Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {goods.map((good,index)=>(<TableRow key={index} good={good} onEdit={onEdit} index={index} onDelete={onDelete} onView={onView} />))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
