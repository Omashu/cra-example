import React from "react";
import Wrapper from "./styles";
import PopularActivity from "../PopularActivity";

export default function PopularActivities({ items }) {
  return (
    <Wrapper>
      {items.map(item => (
        <PopularActivity key={item.key} item={item} />
      ))}
    </Wrapper>
  );
}
