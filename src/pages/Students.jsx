import Card from '../components/Card.jsx'
import PageHeading from '../components/PageHeading.jsx'

const students = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'STUDENT',
}))

function Students() {
  return (
    <section className="catalog-page">
      <PageHeading title="STUDENTS" />
      <div className="catalog-grid">
        {students.map((student) => <Card key={student.id} title={student.title} />)}
      </div>
    </section>
  )
}

export default Students
