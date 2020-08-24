import React, { createRef } from "react"
import { Link } from "gatsby"
import lottie from "lottie-web"
import styled from "styled-components"

class IconLink extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
    this.animationContainer = createRef()
  }

  componentDidMount() {
    this.anim = lottie.loadAnimation({
      container: this.animationContainer.current, // current instance of our container!
      animationData: this.props.animation, // animation file!
      renderer: "svg",
      loop: false,
      autoplay: false,
    })
  }

  

  handlePlay = () => {
    this.anim.goToAndPlay(0);
  }

  render() {
    return (
      <StyledLink to={this.props.target} activeClassName="active">
        <div
          className="animation-container"
          ref={this.animationContainer}
          onClick={this.handlePlay}
        />
      <LinkText>{this.props.text}</LinkText>
      </StyledLink>
    )
  }
}

export default IconLink

const StyledLink = styled(Link) `
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;

  .animation-container {
    max-width: 45px;
    margin: 0 auto;
  }
`

const LinkText = styled.span `
  font-size: 12px;
`