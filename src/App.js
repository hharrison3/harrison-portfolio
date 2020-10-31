import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { NavTabs } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <div>
        <NavTabs/>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;