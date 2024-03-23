import Button from "./components/Button"
import FunctionalButton from "./components/FunctionalButton"
import Details from "./components/details"

function App() {

  // funtion for handling click 
  const handleClick = () => {
    alert("Hey");
  }

  return (
    <>
      {/* Task One */}
      <Details name="Abdullah" age={20}/>

      {/* Task Two */}
      <Button value="Click Me" color="white" backColor="black" padding="15px" /><br /><br />

      {/* Task Three */}
      <FunctionalButton clickFunction={handleClick}/>

    </>
  )
}

export default App
