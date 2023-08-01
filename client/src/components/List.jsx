import React from "react";
import ListItem from "./ListItem.jsx";

const List = ({items, refresh, setRefresh}) => (
  <div>
    <h2 id="work"> workout exercices </h2>
    {items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} theRefresh={refresh} theSetRefresh={setRefresh} />
      </div>
    ))}
  </div>
);

export default List;
