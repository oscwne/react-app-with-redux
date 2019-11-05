import { connect } from 'react-redux'

import { loadCourses } from '../../redux/actions/course.actions'
import { loadAuthors } from '../../redux/actions/author.actions'
import Courses from './Courses'

const mapStateToProps = state => {
  return {
    courses: state.courses || [],
    authors: state.authors || []
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses)
