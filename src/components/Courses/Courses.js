import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CourseList from './CourseList'

class Courses extends Component {
  componentDidMount() {
    const { authors, courses, loadCourses, loadAuthors } = this.props

    if (!authors.length) loadAuthors().catch(error => alert(error))

    if (!courses.length) loadCourses().catch(error => alert(error))
  }

  render() {
    const { courses, authors } = this.props
    return (
      <>
        <h1>Courses</h1>
        <CourseList
          courses={
            !authors.length
              ? []
              : courses.map(course => {
                  return {
                    ...course,
                    authorName: authors.find(
                      author => author.id === course.authorId
                    ).name
                  }
                })
          }
        />
      </>
    )
  }
}

Courses.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Courses
