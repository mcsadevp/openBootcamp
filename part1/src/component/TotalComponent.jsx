
const TotalComponent = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Total: {totalExercises}</p>
  )
}
export default TotalComponent
