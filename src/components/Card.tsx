import { ReactNode } from "react";

import "../global.css";

interface ICard {
  children: ReactNode;
  className: ReactNode;
}

export const Card = (props: ICard) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
