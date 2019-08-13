import {connect} from 'react-redux';
import { actFetchCoursesRequest } from '../action';
import Home from '../components/Home';

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchCourses: (page) => {
      dispatch(actFetchCoursesRequest(page));
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;