import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const HeroBgWrapperTest = ({ props, className, children }) => {
  const themeContext = useContext(ThemeManagerContext)

  const {
    desktopImageDark,
    desktopImageLight,
  } = useStaticQuery(
    graphql`
      query {
       
        desktopImageDark: file(relativePath: { eq: "stockDark.jpg" }) {
          childImageSharp {
            base64: sizes(base64Width: 1920, quality: 100) {
              base64
            }
          }
        }
       
        desktopImageLight: file(relativePath: { eq: "stockLight.jpg" }) {
          childImageSharp {
            base64: sizes(base64Width: 1920, quality: 100) {
              base64
            }
          }
        }
      }
    `
  )


  return (
    <MainWrapper>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {themeContext.isDark ? (
            <HeroBg
              key="bgDark"
              className="bgDark"
              initial={{ scaleY: 1.05, scaleX: 1.05, opacity: 0 }}
              animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
              exit={{ scaleY: 1.05, scaleX: 1.05, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={desktopImageDark.childImageSharp.base64.base64} alt="" />
            </HeroBg>
          ) : (
            <HeroBg
              key="bgLight"
              className="bgLight"
              initial={{ scaleY: 1.05, scaleX: 1.05, opacity: 0 }}
              animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
              exit={{ scaleY: 1.05, scaleX: 1.05, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
             <img src={desktopImageLight.childImageSharp.base64.base64} alt="" />
            </HeroBg>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </MainWrapper>
  )
}

export default HeroBgWrapperTest

const MainWrapper = styled.div`
height: calc(100vh - 89px);
  width: 100%;
  position: absolute;
  z-index: 0;
  
  @media (min-width: 1200px) {
    height: 100vh;
  }
`



const HeroBg = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-size: cover;
  background-color: transparent;
  transform-origin: center center;

  img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    z-index: 0;
  }

  &.bgDark img {
    object-position: 21%;
  }
  &.bgLight img {
    object-position: 64%;
  }

  &.bgDark::after, &.bgLight::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  &.bgDark::after {
    background: linear-gradient(180deg, rgba(51,51,51,.3) 0%, rgba(51,51,51,.5) 100%);
  }

  &.bgLight::after {
    background: linear-gradient(180deg, rgba(255,255,255,.3) 0%, rgba(255,255,255,.5) 100%);
  }

  @media (min-width: 1200px) {
    &.bgDark::after {
      background: linear-gradient(180deg, rgba(24,22,22,1) 0%, rgba(255,255,255,0) 64%);
    }
  
    &.bgLight::after {
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 64%);
    }
  
  }
`
