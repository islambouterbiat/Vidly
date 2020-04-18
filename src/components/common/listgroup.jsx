import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onGenreSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group mt-4">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onGenreSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
