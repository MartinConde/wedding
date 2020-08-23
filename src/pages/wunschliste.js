import React from "react"
import styled, { keyframes } from "styled-components"
import SEO from "../components/seo"
import axios from "axios"
import { motion } from "framer-motion"

const rotation = keyframes`
from {
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
}
to {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-top: 3px solid ${props => props.theme.bgReverse};
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: 0.8s ${rotation} linear infinite;
`

export default class AmazonWish extends React.Component {
  state = {
    items: [],
    isLoading: true,
    errors: null
  };

  getItems() {
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      
      .get(`https://simplescraper.io/api/cdFWH9p3Kiu6dttnU7oI?apikey=${process.env.GATSBY_SCRAPER_API}&offset=0&limit=100`)
      // Once we get a response, we'll map the API endpoints to our props
      .then(response =>
        response.data.data.map(item => ({
          name: `${item.Titel} `,
          image: `${item.Bild}`,
          link: `${item.Bild_link}`
        }))
      )
      // Let's make sure to change the loading state to display the data
      .then(items => {
        this.setState({
          items,
          isLoading: false
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
this.getItems();

    
  }

  render() {
    const { isLoading, items } = this.state;
    return (
      <>
      <SEO title="Unsere Wunschliste" />
      <MainWrapper>
      <PageTitle layoutId="underline">Unsere Wunschliste</PageTitle>
        <PageIntro>
          Wir würden uns sehr über eine kleine Finanzspritze für die
          Flitterwochen freuen.Allerdings gibt es auch noch so einiges, was in
          unserem Haushalt fehlt.
        </PageIntro>
        <ProductGrid>
        {!isLoading ? (
          items.map(item => {
            const { name, image, link } = item;
            return (
              <ProductItem key={name}>
                <ProductImage>
                <img src={image} alt={name} />
              </ProductImage>
              <ProductTitle>{name}</ProductTitle>
              <ProductButton href={link} target="_blank" rel="noreferrer">
                Bei Amazon anschauen
              </ProductButton>

              </ProductItem>
            );
          })
        ) : (
          <Spinner />
        )}
        </ProductGrid>
        </MainWrapper>
      </>
    )
  }
}

const MainWrapper = styled.div`
min-height: calc(100vh - 89px);
  padding: 25px 25px 100px 25px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    padding-top: 200px;
    min-height: 100vh;
  }
`

const PageTitle = styled(motion.h1)`
  text-align: center;
`

const PageIntro = styled.p`
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
`

const ProductGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start
    min-height: 100vh;
    padding-top: 50px;
    
`

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 94%;
  margin: 3%;
  border: 2px solid ${props => props.theme.bgReverse};

  @media (min-width: 768px) {
    flex: 0 0 44%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 27%;
  }
`

const ProductImage = styled.div`
  height: 275px;
  width: 100%;

  img {
    height: 275px;
    object-fit: cover;
    width: 100%;
  }
`

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 25px;
  font-family: Raleway;
`

const ProductButton = styled.a`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  text-decoration: none;
  color: ${props => props.theme.textColor};
  background: transparent;
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 30px;
  padding: 6px;
  transition: 0.25s all ease-out;
  text-align: center;

  &:hover {
    background: ${props => props.theme.bgReverse};
    color: ${props => props.theme.bgColor};
  }
`