import ContentComponent from "./component/ContentComponent"
import HeadComponent from "./component/HeadComponent"
import TotalComponent from "./component/TotalComponent"

const App = () => {
  const course = 'Half Stack application development';
  const part1 = { name: 'Fundamentals of React', exercises: 10 };
  const part2 = { name: 'Using props to pass data', exercises: 7 };
  const part3 = { name: 'State of a component', exercises: 14 };

  return (
    <>
      <HeadComponent course={course} />
      <ContentComponent part1={part1} part2={part2} part3={part3} />
      <TotalComponent part1={part1} part2={part2} part3={part3} />

    </>
  )
}

export default App