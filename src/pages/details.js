import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import SEO from "../components/seo"
import MapContainer from "../components/map"

const SplitWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
`

const LetfWrapper = styled(motion.div)`
padding: 25px;

  div {
    max-width: 650px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 50vw;
  }
`

const RightWrapper = styled(motion.div)`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 500px;
  padding-bottom: 90px;

  @media (min-width: 1200px) {
    width: 50vw;
    height: 100vh;
    padding-bottom: 0px;
  }
`

const SubTitle = styled.h2`
  display: inline-block;
  margin-right: 15px;
`
const AnimatedTitle = styled(motion.h1)``

const AnimatedContent = styled(motion.div)``

const Details = () => (
  <>
    <SEO title="Details" />
    <SplitWrapper>
      <LetfWrapper>
        <div>
          <AnimatedTitle
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.1, ease: "easeOut" }}
          >
            Daten der Trauung
          </AnimatedTitle>
          <AnimatedContent
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.1, ease: "easeOut" }}
          >
            <SubTitle>Wann?</SubTitle>
            <span>Samstag den 15.05.2021 um 14:00 Uhr </span>
            <br />
            <SubTitle>Wo?</SubTitle>
            <span>Hof Appelbü in 24861 Bergenhusen, Schleswig Holstein</span>
            <p>
              Um genügend Zeit für Schlaf und Anreise zu haben, beginnen wir um
              14 Uhr mit der freien Trauung. Gerne können wir euch
              Unterkunftsmöglichkeiten in der Nähe nennen.
            </p>
            <motion.h2 layoutId="underline2">Dresscode</motion.h2>
            <p>
              Liebe Ladies: Wir bitten euch ausdrücklich darum, keine hohen
              Schuhe zu tragen. Wir möchten mit euch ausgelassen und bis in die
              späten Abendstunden Feiern und Tanzen können. Daher wäre flaches
              Schuhwerk die beste Wahl.{" "}
            </p>
            <p>Farben der Hochzeit Royal-Blau &amp; Bordeaux-Rot</p>
          </AnimatedContent>
        </div>
      </LetfWrapper>
      <RightWrapper layoutId="bg">
        <MapContainer />
      </RightWrapper>
    </SplitWrapper>
  </>
)

export default Details
