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
    <div>
      <h1> <HeadCopmponent course={course} /> </h1>
      <section>
        <PartComponent part = {part1} exercises = {exercises1}/>
        <PartComponent part = {part2} exercises = {exercises2}/>
        <PartComponent part = {part3} exercises = {exercises3}/>
      </section>
     {/* <section>
        <ContentComponent
          part1={part1} exercises1={exercises1}
          part2={part2} exercises2={exercises2}
          part3={part3} exercises3={exercises3} />
      </section>*/}
     <section>
      <TotalComponent exercises1 = {exercises1}  exercises2={exercises2} exercises3={exercises3} />
     </section>
    </div>
  )
}

export default App