import {RefObject} from "react";

/**@description Функция проверят, подходит ли по размеру описание поста
 * @param {HTMLDivElement} elem элемент
 * @param {number} max максимальная высота
 * @return boolean
 * */
export const isInValidDeckSize = (elem:RefObject<HTMLDivElement>, max: number): boolean | null => {
  return elem.current && elem.current?.clientHeight > max;
}