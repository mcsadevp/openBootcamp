import ContentComponent from "./component/ContentComponent"
import HeadComponent from "./component/HeadComponent"
import TotalComponent from "./component/TotalComponent"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <HeadComponent course={course.name} />
      <ContentComponent parts={course.parts} />
      <TotalComponent parts={course.parts} />
    </div>
  )
}

export default App