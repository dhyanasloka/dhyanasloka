import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import CookieBot from 'react-cookiebot/lib/CookieBot';
import Home from './pages/HomePage/Home';
import Videos from './pages/VideosPage/Videos';
import Articles from './pages/ArticlesPage/Articles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
const domainGroupId = 'f096c79d-2c79-435a-8636-685723d03031';


function App() {
  const [hasCookieBot, setHasCookieBot] = useState(undefined);
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/videos' component={Videos} />
        <Route path="/articles" component={Articles} />
      </Switch>
      <Footer />
      <div style={{ flex: 1, alignItems: 'center' }}>
        <CookieBot domainGroupId={domainGroupId} />
        <p>Click to test Cookiebot</p>
        <button title="TEST" onPress={() => setHasCookieBot(!!document.querySelector('#CookieBot'))} >
          TEST</button>
        <div style={{ color: 'red', marginVertical: 10 }}>
          {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}
        </div>
      </div>
    </Router>
  )
}

export default App;