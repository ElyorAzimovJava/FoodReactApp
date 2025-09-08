import Search from "./components/Search.jsx";
import {useState} from "react";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Container from "./components/Container.jsx";
import InnerContainer from "./components/InnerContainer.jsx";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
      <div className="App">
          <Nav/>
          <Search foodData={foodData} setFoodData={setFoodData}/>
          <Container>
              <InnerContainer>
                  <FoodList foodData={foodData}/>
              </InnerContainer>
          </Container>
      </div>
  )
}

export default App
