// App.js
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector'
import Greeting from './Greeting';

const App = () => {
  return (
    <LanguageProvider>
      <div> Language Selector App</div>
      <LanguageSelector/>
      <Greeting/>
    </LanguageProvider>
  );
};

export default App;
