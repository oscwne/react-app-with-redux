import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../common/TextInput'
import SelectInput from '../../common/SelectInput'

const CourseForm = ({
  authors,
  saveCourse,
  errors,
  saving,
  history,
  ...props
}) => {
  const { course: selectedCourse } = props
  const [course, setCourse] = useState({ ...selectedCourse })

  const onChange = event => {
    const { name, value } = event.target
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }))
  }

  const handleOnSave = event => {
    event.preventDefault()

    saveCourse(course).then(() => history.push('/courses'))
  }

  return (
    <form onSubmit={handleOnSave}>
      <h2>{course.id ? 'Edit' : 'Add'} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ''}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}

CourseForm.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.any).isRequired,
  course: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any),
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  saving: PropTypes.bool
}

CourseForm.defaultProps = {
  errors: {},
  saving: false
}

export default CourseForm
