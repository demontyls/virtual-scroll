import {ICard} from "../ui/card/interface";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts?';

/**@description
 * @param {number} count номер страницы
 * @return ICard*/
export const getPosts = async (count:number): Promise<ICard[]> => {
  try {
    const response = await fetch(`${baseUrl}_page=${count}&_limit=10`).then(response => response.json());
    return await response;
  } catch (error) {
    return [];
  }
}