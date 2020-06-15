/**
 * @description Generic function to  filter object based on key and search.
 * @param object being searched.
 * @param key we are searching against.
 * @param search item we are searching for.
 */
export const groupFilter = (object: Array<any> , key: string, search: string) => {
  if (object) {
    return object.filter((o => {
      return o[key] === search;
    }));
  }
  return [];
};
