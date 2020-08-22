import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"



import DmToggle from "./dmToggle"
import IconLink from "./lottieIconLink"
import HomeIconDark from "../../icons/home-dark.json"
import GeschichteIconDark from "../../icons/geschichte-dark.json"
import DetailsIconDark from "../../icons/map-dark.json"
import WunschlisteIconDark from "../../icons/wish-dark.json"
import ZusagenIconDark from "../../icons/rsvp-dark.json"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"


const MobileNavLight = (props) => {
  const themeContext = useContext(ThemeManagerContext)
  console.log(themeContext.isDark)

  return (
    <NavWrapper>
    <NavContainer >
      <NavItem>
        <IconLink target={"/"} text={"Home"} animation={HomeIconDark} />
      </NavItem>
      <NavItem >

      <IconLink target={"/unsere-geschichte"} text={"Geschichte"} animation={GeschichteIconDark} />
      
      </NavItem>

      <NavItem>
        <IconLink
          target={"/details"}
          text={"Details"}
          animation={DetailsIconDark}
        />
      </NavItem>
      <NavItem>
        <IconLink
          target={"/wunschliste"}
          text={"Wunschliste"}
          animation={WunschlisteIconDark}
        />
      </NavItem>
      <NavItem>
        <IconLink target={"/rsvp"} text={"Zusagen"} animation={ZusagenIconDark} />
      </NavItem>
      <NavItem className="mobDmToggle">
        <DmToggle />
      </NavItem>
    </NavContainer>
  </NavWrapper>
  )
}

export default MobileNavLight



const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #0e0b16;
  width: 100%;
  z-index: 9999999;

  a {
    color: #f7f7f7;
  }
`

const NavContainer = styled.ul`
  display: flex;
  margin: 0;
`

const NavItem = styled.li`
  display: flex;
  width: 20%;
  padding: 5px;
  margin: 0;
  justify-content: center;

  &.mobDmToggle {
    align-items: center;
  }

  &.mobDmToggle div {
    transform: rotate(90deg);
  }
`
