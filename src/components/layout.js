import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import React, { useContext, useEffect } from "react"
import styled, { withTheme } from "styled-components"
import { AnimateSharedLayout } from "framer-motion"
import "./layout.css"
import Nav from "./nav/nav"
import MobileNavDark from "./nav/mobileNavDark"
import MobileNavLight from "./nav/mobileNavLight"
import Media from 'react-media';

const MainWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  transition: 0.25s all ease-out;
`

const Header = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (min-width: 1200px) {
    background: linear-gradient(180deg, ${props => props.theme.bgColor} 0%, ${props => props.theme.bgColorTr} 100%);
  }
`

export const Layout = withTheme(props => {
  const { children, theme } = props

  const themeContext = useContext(ThemeManagerContext)

  useEffect(() => themeContext.toggleDark(true), [])

  return (
    <MainWrapper>
      <Header>
      <Media query="(min-width: 1200px)" render={() =>
          (
            <Nav />
          )}
        />
        <Media query="(max-width: 1199px)" render={() =>
          (
            themeContext.isDark ? <MobileNavDark /> : <MobileNavLight />
            
          )}
        />
        
      </Header>

      <AnimateSharedLayout>
        <main>{children}</main>
      </AnimateSharedLayout>
    </MainWrapper>
  )
})

export default Layout
