import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import DmToggle from "./dmToggle"

export default function Nav() {
  return (
    <NavWrapper>
      <NavLeft>
        <NavContainer>
          <NavItem>
            <NavLink to="/" activeClassName="active">
              <span>Home</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/unsere-geschichte" activeClassName="active">
              <span>Unsere Geschichte</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/details" activeClassName="active">
              <span>Details</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/wunschliste" activeClassName="active">
              <span>Wunschliste</span>
            </NavLink>
          </NavItem>
        </NavContainer>
      </NavLeft>
      <NavRight>
        <NavContainer>
          <NavItem>
            <NavLink to="/rsvp" activeClassName="active">
              <span>Zusagen</span>
            </NavLink>
          </NavItem>

          <NavItem>
            <DmToggle />
          </NavItem>
        </NavContainer>
      </NavRight>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 5px 35px;
  width: 100%;
`

const NavLeft = styled.div``

const NavRight = styled.div``

const NavContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    width: 100%;
    display: flex;
  }
`

const NavItem = styled.li`
  margin: 0 10px;
`

const NavLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;

  color: ${props => props.theme.textColor};
  padding: 8px 16px;
  position: relative;

  &:hover,
  &.active {
    color: ${props => props.theme.textColor};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 26px;
    background-color: ${props => props.theme.accentBgColor};
    left: 50%;
    top: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, 20%) scaleX(1) scaleY(0.1) rotateY(0deg)
      skew(10deg);
    transition: 1s cubic-bezier(0.43, 1.91, 0.35, 0.74);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    background: rgba(0, 0, 0, 0.3);
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) scale(0);
    transition: 1s cubic-bezier(0.43, 1.91, 0.35, 0.74);
    z-index: -1;
  }

  &:hover:before,
  &.active:before {
    transform: translate(-50%, -50%) scaleX(1) scaleY(1) rotateY(180deg)
      skew(10deg);
  }

  &:hover:after,
  &.active:after {
    transform: translate(-50%, -50%) scale(0);
  }
`
