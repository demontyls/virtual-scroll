import {CSSProperties} from "react";

export interface ICard {
  userId: number;
  id: number;
  title: string;
  body: string;
  index: number
}

export interface IProps {
  data: ICard;
  setCount: (value: number) => void;
  style?: CSSProperties;
  from: string
}