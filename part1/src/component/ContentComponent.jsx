
const ContentComponent = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </div>
  )
}




export default ContentComponent