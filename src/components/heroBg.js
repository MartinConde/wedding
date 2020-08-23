import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

import BackgroundImage from "gatsby-background-image"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const HeroBgWrapper = ({ props, className, children }) => {
  const themeContext = useContext(ThemeManagerContext)

  const {
    mobileImageDark,
    desktopImageDark,
    mobileImageLight,
    desktopImageLight,
  } = useStaticQuery(
    graphql`
      query {
        mobileImageDark: file(relativePath: { eq: "stockDarkMob.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImageDark: file(relativePath: { eq: "stockDark.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileImageLight: file(relativePath: { eq: "stockLightMob.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImageLight: file(relativePath: { eq: "stockLight.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sourcesDark = [
    mobileImageDark.childImageSharp.fluid,
    {
      ...desktopImageDark.childImageSharp.fluid,
      media: `(min-width: 810px)`,
    },
  ]

  const sourcesLight = [
    mobileImageLight.childImageSharp.fluid,
    {
      ...desktopImageLight.childImageSharp.fluid,
      media: `(min-width: 810px)`,
    },
  ]

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
              <BackgroundImage
                Tag={`section`}
                id={`bgDark`}
                className={className}
                fluid={sourcesDark}
              />
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
              <BackgroundImage
                Tag={`section`}
                id={`bgLight`}
                className={className}
                fluid={sourcesLight}
              />
            </HeroBg>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </MainWrapper>
  )
}

export default HeroBgWrapper

const MainWrapper = styled.div`
height: calc(100vh - 89px);
  width: 100%;
  position: absolute;
  
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
    background: linear-gradient(180deg, rgba(24,22,22,1) 0%, rgba(255,255,255,0) 64%);
  }

  &.bgLight::after {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 64%);
  }
`
