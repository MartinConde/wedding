import React from "react"
import Flickity from "react-flickity-component"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Arrow from "../svg/arrow.inline.svg"

import "flickity/css/flickity.css"
import "flickity-fade/flickity-fade.css"
import "flickity-fade/flickity-fade.js"

const Container = styled.div`
    position: relative;
`

const Slide = styled.div`
  position: relative;
  min-width: 100%;

  @media (min-width: 1200px) {
    height: 100vh;
  }
`

const SliderNav = styled.div `
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 9;
    margin: 25px;
    background: rgba(255,255,255,.6);
`

const ArrowPrev = styled(Arrow) `
    transform: scaleX(-1);
    width: 50px;
    padding: 8px;
    
`

const ArrowNext = styled(Arrow) `
    width: 50px;
    padding: 8px;
`

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  
  handleNext = () => {
    this.flkty.next()
  }
  handlePrev = () => {
    this.flkty.previous()
  }
  render() {
    console.log(this.props)

    const flickityOptions = {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      fade: true,
      wrapAround: true,
      autoPlay: 6000
    }
    return (
      <Container>
          <SliderNav>
              <ArrowPrev onClick={this.handlePrev} />
              <ArrowNext onClick={this.handleNext} />
          </SliderNav>
        <Flickity
          flickityRef={c => (this.flkty = c)}
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {this.props.sites.edges.map(({ node }, index) => (
            <Slide key={index}>
              <Img fluid={node.childImageSharp.fluid} />
            </Slide>
          ))}
        </Flickity>
      </Container>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "slider" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Slider sites={data.allFile} />}
  />
)
