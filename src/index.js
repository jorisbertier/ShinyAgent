import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/Survey/Survey';
import Header from './components/Header/Index';
import Error from './components/Error';
import { Result } from './pages/Result/Result';
// import { Freelances } from '../src/pages/Freelances/Freelances';
import Freelances from './pages/Freelances/Freelances'
import Footer from './pages/Footer';
import { SurveyProvider, ThemeProvider } from './utils/style/context';
import GlobalStyle from './utils/style/GlobalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <ThemeProvider>
    <SurveyProvider>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />}/>
          <Route path="/result" element={<Result />}/>
          <Route path="/freelances" element={<Freelances/>}/>
          <Route path="*" element={<Error />} />
          { /* Nous imbriquons nos composants dans survey */}
            {/* <Route path="client" element={<ClientForm />} /> */}
            {/* <Route path="freelance" element={<FreelanceForm />} /> */}
        </Routes>
        <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
