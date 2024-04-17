import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import "./App.css";
import Container from './components/Container';
import InContainer from './components/InContainer';
import FoodDetails from './components/FoodDetails';



function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")
 
  
  return (
    <div className="App">
       <div>
       <Nav/>
        <Search foodData ={foodData} setFoodData = {setFoodData}/>
         <Container>
          <InContainer>
          <FoodList  setFoodId={setFoodId} foodData={foodData}/>
          </InContainer>
           <InContainer>
            <FoodDetails foodId={foodId}/>
            </InContainer>  
        
          </Container>
    
        
        
       
       </div>
       
    </div>
  )
}
export default App;