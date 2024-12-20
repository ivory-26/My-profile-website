/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sahil Karpe",
  title: "Student trying to code",
  email: "karpesahil2007@gmail.com",
  gitHub: "ivory-26",
  instagram: "sahil_26.01",
  linkedIn: "",
  medium: "",
  twitter: "@Sahil_Karpe07",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <section id="home">
        <Home name={siteProps.name} title={siteProps.title} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="footer">
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </section>
    </div>
  );
};

export default App;
