import ContentComponent from "./component/ContentComponent"
import HeadComponent from "./component/HeadComponent"
import TotalComponent from "./component/TotalComponent"

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <>
     <HeadComponent course={course} />
      <ContentComponent parts={parts} />
      <TotalComponent parts={parts} />

    </>
  )
}

export default App