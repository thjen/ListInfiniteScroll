import * as Types from '../constants/action.type';
import { call } from '../utils/request.api';

export const actFetchCoursesRequest = (page) => {
  return (dispatch) => {
    return call(page)
      .then((res) => {
        dispatch(actFetchCourses(res.data.classroom, false));
      })
      .catch((err) => dispatch(actFetchCourses([], false)));
  }
}
export const actFetchCourses = (courses, loading) => {
  return {
    type: Types.FETCH_COURSES,
    courses: {
      data: courses.data,
      loading: loading,
      current_page: courses.current_page,
      last_page: courses.last_page
    }
  }
}