import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [peeps, setpeeps] = useState([
   {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "Ronk",
    Age: 23,
    id: 3,
    isinvited: false,
    ADDRESS: "Bangalore, India",
    GENDER: "Male",
    
  },
  {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "WIZZ",
    Age: 20,
    id: 2,
    isinvited: false,
    ADDRESS: "Mumbai, India",
    GENDER: "Male",
  },
  {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "NTN",
    Age: 15,
    id: 1,
    isinvited: false,
    ADDRESS: "New Delhi, India",
    GENDER: "Male",
  },
  {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "Thander",
    Age: 16,
    id: 4,
    isinvited: false,
    ADDRESS: "Chandigarh, India",
    GENDER: "Male",
  },
  {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "Pranjal",
    Age: 18,
    id: 5,
    isinvited: false,
    ADDRESS: "Pune, India",
    GENDER: "male",
  },
  {
    IMAGE: "https://i.pinimg.com/736x/34/18/df/3418df94a9026bf852e26d59803ca10d.jpg",
    NAME: "Larry",
    Age: 22,
    id: 6,
    isinvited: false,
    ADDRESS: "Hyderabad, India",
    GENDER: "Female",
  }
  ]);

  const  handleClick = ((id)=>{
    const newdata = peeps.map((item)=>{
      return item.id === id ? {...item,isinvited: !item.isinvited} :item
    });
    setpeeps(newdata);
  })

  return (
    <div>
      <Navbar peeps={peeps}/>
      <Card peeps={peeps} handleClick={handleClick} />
    </div>
  );
}

export default App;
 