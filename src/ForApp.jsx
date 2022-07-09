import React from 'react'
import Jumbotron from "./components/jumbotron/styles/jumbotron";
import jumboData from './fixtures/jumbo.json'
import 'normalize.css'
import Footer from "./footer/Footer";
import Accordion from "./components/Accordion";
import Header from './components/Header';

function ForApp() {
  return (
    <div>
      <Header/>
         <Jumbotron.Container>
        {jumboData.map((items) => (
          <Jumbotron key={items.id} direction={items.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{items.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{items.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={items.image} alt={items.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
      <Accordion/>
      <Footer />
    </div>
  )
}

export default ForApp