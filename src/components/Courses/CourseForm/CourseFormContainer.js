import { connect } from 'react-redux'

import CourseForm from './CourseForm'

import { saveCourse } from '../../../redux/actions/course.actions'

const newCourse = {
  id: null,
  title: '',
  authorId: null,
  category: ''
}

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params
  const { courses, authors } = state
  return {
    course:
      slug && courses.length
        ? courses.find(course => course.slug === slug)
        : newCourse,
    authors
  }
}

const mapDispatchToProps = {
  saveCourse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseForm)
