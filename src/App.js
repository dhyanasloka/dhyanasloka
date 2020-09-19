import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Videos from './pages/VideosPage/Videos';
import Articles from './pages/ArticlesPage/Articles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {

  return (

    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/videos' exact component={Videos} />
        <Route path="/articles" exact component={Articles} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;