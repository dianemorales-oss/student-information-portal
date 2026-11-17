import Card from '../components/Card.jsx'
import PageHeading from '../components/PageHeading.jsx'

const courses = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: 'COURSE',
}))

function Courses() {
  return (
    <section className="catalog-page">
      <PageHeading title="COURSES" />
      <div className="catalog-grid">
        {courses.map((course) => <Card key={course.id} title={course.title} />)}
      </div>
    </section>
  )
}

export default Courses
