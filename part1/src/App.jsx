import ContentComponent from "./component/ContentComponent"
import HeadCopmponent from "./component/HeadCopmponent"
import PartComponent from "./component/PartComponent"
import TotalComponent from "./component/TotalComponent"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
       <HeadCopmponent course={course} />  
        <ContentComponent
          part1={part1} exercises1={exercises1}
          part2={part2} exercises2={exercises2}
          part3={part3} exercises3={exercises3} />
      <TotalComponent exercises1 = {exercises1}  exercises2={exercises2} exercises3={exercises3} />
   
    </>
  )
}

export default App