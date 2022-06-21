import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InteractiveRatingComponent from './components/interactiveRatingComponent';
import QRCodeComponent from './components/qr-code-component-main/qrcodecomponent';
import IntroSectionWithDropdownNavigation from './components/intro-section-with-dropdown-navigation-main/introsectionwithdropdownnavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<App />} />
        <Route path="/interactiveratingcompnent" element= {<InteractiveRatingComponent />} />
        <Route path="/qrcodecomponentmain" element= {<QRCodeComponent />} />
        <Route path="/introsectionwithdropdownnavigation" element= {<IntroSectionWithDropdownNavigation />} />
        <Route path="*" element= {<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
