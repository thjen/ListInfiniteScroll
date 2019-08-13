import * as Types from '../constants/action.type';

function dedupeByKey(arr, key) {
  const tmp = {};
  return arr.reduce((p, c) => {
    const k = c[key];
    if (tmp[k]) return p;
    tmp[k] = true;
    return p.concat(c);
  }, []);
}
const courses = (courses = { data: [], loading: true, current_page: 1, last_page: 1 }, action) => {
  switch(action.type) {
    case Types.FETCH_COURSES:
      const data = courses.data.concat(action.courses.data);
      return {data: data, loading: action.courses.loading, current_page: action.courses.current_page, last_page: action.courses.last_page};
    default: return courses;
  }
}
export default courses;