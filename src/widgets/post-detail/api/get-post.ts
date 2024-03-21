import {ICard} from "../../../entities/post/ui/card/interface";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/';

/**@description
 * @param {number} id уникальный айди поста
 * @return ICard*/
export const getPost = async (id:string): Promise<ICard | null> => {
  try {
    const response = await fetch(`${baseUrl}${id}`).then(response => response.json());
    return await response;
  } catch (error) {
    return null;
  }
}