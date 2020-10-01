import React,{useEffect,useState} from 'react';
import Recipe from './recipe';

import './App.css';

const App = ()  => {
  
  const APP_ID ='';
  const APP_KEY='';

  const [recipes,setRecipes]  = useState([]);

  const [search,setSearch]  = useState("");

  const [query,setQuery] = useState('');

  useEffect(  ()=>{
    getRecipes();
  },[query]);
   const getRecipes = async ()  =>  {
     const respose  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await respose.json();
     console.log(data); 
     setRecipes(data.hits);
   }
   const updateSearch = e =>  {
     setSearch(e.target.value);
    }
    const updateQuery = e =>  {
      e.preventDefault();
      setQuery(search);

    }
  
  return(
    <div className="App">
      
      <form className="searchForm" onSubmit={updateQuery}>
        <input  type="text" className='searchText' value={search} onChange={updateSearch}/>
        <button type="submit" className="searchButton">Search</button>
        </form>
        <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe  key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} 
          />
          ))}
          </div>
          </div>
          
          
        
        );

};





export default App;
