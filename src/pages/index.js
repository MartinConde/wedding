import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"
import SEO from "../components/seo"
import HeroBgWrapperTest from "../components/heroBgTest"

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`
const BgWrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
const BG = styled(HeroBgWrapperTest)`
  height: calc(100vh - 89px);
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media (min-width: 1200px) {
    height: 100vh;
  }
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 9;
  width: 100%;
  padding: 10px;
`

const HeroTitle = styled(motion.h1)`
  font-size: 60px;
  text-align: center;
  color: ${props => props.theme.textColor};
  @media (min-width: 1200px) {
    font-size: 5vw;
  }
`

const HeroDesc = styled.p`
  font-weight: 700;
  font-style: italic;
  text-align: center;
  word-wrap: break-word;
  color: ${props => props.theme.textColor};
  padding: 5px 40px;
  max-width: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }

  @media (min-width: 768px) {
    max-width: none;
  }
`

const HeroButtons = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Btn = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.bgReverse};
  background: transparent;
  border: 2px solid ${props => props.theme.bgReverse};
  border-radius: 30px;
  padding: 12px 48px;
  margin: 10px 30px;
  transition: 0.25s all ease-out;
  width: 210px;
  text-align: center;

  &:hover {
    background: ${props => props.theme.bgReverse};
    color: ${props => props.theme.bgColor};
    letter-spacing: 3px;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Wir sagen ja" description="Wir möchten uns das Ja-Wort geben und würden uns freuen wenn ihr diesen unvergesslichen Tag mit uns verbringen würdet" />
    <ContentWrapper>
      <BgWrapper>
        <BG />
      </BgWrapper>
      <HeroContent
        initial={{ y: "50px", opacity: "0" }}
        animate={{ y: "0", opacity: "1" }}
        exit={{ y: "50px", opacity: "0" }}
      >
        <HeroTitle>Wir sagen ja!</HeroTitle>
        <HeroDesc>
          Wir möchten uns das Ja-Wort geben und würden uns freuen wenn
          <br /> ihr diesen unvergesslichen Tag mit uns verbringen würdet
        </HeroDesc>
        <HeroButtons>
          <Btn to="/details/">Details</Btn>
          <Btn to="/rsvp/">Zusagen</Btn>
        </HeroButtons>
      </HeroContent>
    </ContentWrapper>
  </>
)

export default IndexPage
