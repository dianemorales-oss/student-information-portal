function Card({ title, course }) {
  if (course) {
    return (
      <article className="course-card">
        <div className="course-accent" style={{ backgroundColor: course.color }}>
          <span className="course-icon" aria-hidden="true">{course.icon}</span>
          <span className="course-code">{course.id}</span>
        </div>
        <div className="course-content">
          <span className="eyebrow">{course.category}</span>
          <h3 className="course-title">{title}</h3>
          <p className="course-description">{course.description}</p>
          <div className="course-details">
            <span>{course.instructor}</span>
            <span>{course.students} students</span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="placeholder-card">
      <h2>{title}</h2>
    </article>
  )
}

export default Card
