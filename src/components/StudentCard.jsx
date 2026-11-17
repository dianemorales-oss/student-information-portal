function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="student-identity">
          <div
            className="student-avatar"
            style={{ backgroundColor: student.color }}
            aria-hidden="true"
          >
            {student.initials}
          </div>
          <div>
            <h3 className="student-name">{student.name}</h3>
            <p className="student-major">{student.major}</p>
          </div>
        </div>
        <span className="status-pill">Enrolled</span>
      </div>
      <div className="student-meta">
        <div>
          Student ID
          <strong>{student.id}</strong>
        </div>
        <div>
          Class
          <strong>{student.year}</strong>
        </div>
        <div>
          GPA
          <strong>{student.gpa}</strong>
        </div>
      </div>
    </article>
  )
}

export default StudentCard
