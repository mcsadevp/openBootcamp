
const ContentComponent = props => {
  return (
    <div>
        <PartComponent part = {props.part1} exercises = {props.exercises1}/>
        <PartComponent part = {props.part2} exercises = {props.exercises2}/>
        <PartComponent part = {props.part3} exercises = {props.exercises3}/>
    </div>
  )
}



export default ContentComponent