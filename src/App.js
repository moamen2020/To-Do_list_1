import React  from 'react';
import Navbar from './componants/Navbar';
import BookList from './componants/BookList';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './componants/ToggleTheme';

function App()  {

    return (
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </ThemeContextProvider>
      </div>
    )
}


export default App;



