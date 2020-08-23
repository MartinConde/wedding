import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
`
const ToggleInput = styled.input`
display: none;
	&:checked + label {
		&:before {
			background-color: #FFF;
			transform: translateX(30px);
		}
		
		&:after {
			transform: translateX(120px) scale(1);
		}
	}

`
const ToggleLabel = styled.label`
position: relative;
display: block;
width: 60px;
height: 30px;
border-radius: 100px;
background-color: #6882a1;
overflow: hidden;
cursor: pointer;
&:before,
&:after {
  display: block;
  position: absolute;
  content: "";		
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 5px;
  left: 5px;
  transition: .5s ease;
}
&:before {
  background-color: #ffa41b;

}

&:after {
  background-color: #6882a1;
  left: -92px;
  transform: scale(0.00001);
}

`


const DmToggle = ({ props, className, children }) => {
  const themeContext = useContext(ThemeManagerContext)


  return (
    <ToggleWrapper>
        <ToggleInput
          type="checkbox"
          id="toggle"
          onChange={() => themeContext.toggleDark()}
          checked={themeContext.isDark}
        />
        <ToggleLabel htmlFor="toggle"></ToggleLabel>
      </ToggleWrapper>
  )
}

export default DmToggle