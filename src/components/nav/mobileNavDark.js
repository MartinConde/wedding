import React, { useContext } from "react"
import styled from "styled-components"
import DmToggle from "./dmToggle"
import IconLink from "./lottieIconLink"

import HomeIconLight from "../../icons/home-light.json"
import GeschichteIconLight from "../../icons/geschichte-light.json"
import DetailsIconLight from "../../icons/map-light.json"
import WunschlisteIconLight from "../../icons/wish-light.json"
import ZusagenIconLight from "../../icons/rsvp-light.json"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"


const MobileNavDark = (props) => {
  const themeContext = useContext(ThemeManagerContext)
  console.log(themeContext.isDark)
  return (
    <NavWrapper>
    <NavContainer >
      <NavItem>
        <IconLink target={"/"} text={"Home"} animation={HomeIconLight} />
      </NavItem>
      <NavItem >
      <IconLink target={"/unsere-geschichte"} text={"Geschichte"} animation={GeschichteIconLight} />
      
      
      </NavItem>

      <NavItem>
        <IconLink
          target={"/details"}
          text={"Details"}
          animation={DetailsIconLight}
        />
      </NavItem>
      <NavItem>
        <IconLink
          target={"/wunschliste"}
          text={"Wünsche"}
          animation={WunschlisteIconLight}
        />
      </NavItem>
      <NavItem>
        <IconLink target={"/rsvp"} text={"Zusagen"} animation={ZusagenIconLight} />
      </NavItem>
      <NavItem className="mobDmToggle">
        <DmToggle />
      </NavItem>
    </NavContainer>
  </NavWrapper>
  )
}

export default MobileNavDark



const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #e7dfdd;
  width: 100%;
  z-index: 9999999;
  a {
    color: #0e0b16;
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
