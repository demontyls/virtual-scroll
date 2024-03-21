import { RefObject } from 'react';

/**@description
 * @param {HTMLDivElement} elem Элемент
 * @return {number}
 * */
export const getLineHeightElem = (elem:RefObject<HTMLDivElement>): number => {
  const lineHeight = window.getComputedStyle(elem.current as Element).lineHeight;
  return parseInt(lineHeight.replace(/[^\d]/g, ''));
}