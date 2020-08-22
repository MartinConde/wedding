import React, { useContext } from "react"
import Airtable from "airtable"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import styled, { keyframes } from "styled-components"
import FloatingLabelInput from "react-floating-label-input"
import confetti from "canvas-confetti"
import ReCAPTCHA from "react-google-recaptcha"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import SEO from "../components/seo"

const RsvpForm = styled.form`
  background: ${props => props.theme.bgColor};
  padding: 25px;
  width: 100%;
  max-width: 1000px;
  border: 2px solid ${props => props.theme.bgReverse};

 
  div.rsvpInput {
    border-bottom: 1px solid ${props => props.theme.accentColor};
    width: 100%;
    margin-bottom: 20px;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  small {
    font-size: 12px;
    color: #333 !important;
    text-align: center;
    display: block;
    padding: 10px;
  }

  small a {
    color: #515151;
  }

  @media (min-width: 1024px) {
    margin: 100px auto;
    padding: 50px;

    div.rsvpInput {
      margin-bottom: 5px;
    }
  }
  
`

const FieldGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;

  .mainFields {
    width: 100%;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 50px;

    .mainFields {
      width: 90%;
    }

    .topFields {
      display: flex;
    }

    .topFields div:first-child {
      margin-right: 35px;
    }

    .btmFields {
      margin-top: 20px;
    }
  }
`

const FieldGroup = styled.div``

const TextInput = styled(FloatingLabelInput)`
  background: transparent;
  color: ${props => props.theme.textColor};
`

const UiButton = styled.button`
  border-radius: 20px;
  background: transparent;
  color: ${props => props.theme.textColor};
  padding: 8px 24px;
  margin-bottom: 50px;
  transition: 0.25s all ease-out;
  box-shadow: none;
  border: 2px solid ${props => props.theme.textColor};

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.bgReverse};
    color: ${props => props.theme.bgColor};
  }
`

const UiButtonRemove = styled.button`
  border-radius: 100%;
  height: 25px;
  width: 25px;
  padding-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  border: none;
  background: ${props => props.theme.accentBgColor};
  color: ${props => props.theme.textColor};
  transition: 0.25s all ease-out;
  line-height: 0;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.textColor};
    color: ${props => props.theme.accentBgColor};
  }
`

const SucessMsg = styled.div``

const SubmitBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  border: none;
  border-style: none;
  outline-style: none;
  text-align: center;
  margin: 0 auto;
  padding: 15px 0;


  ::-moz-focus-inner {
    border: 0;
  }

  :focus {
    outline: none !important;
  }

  &:hover {
    cursor: pointer;
  }
`

const rotation = keyframes`
from {
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
}
to {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-top: 3px solid rgba(0, 0, 0, 0.5);
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: 0.8s ${rotation} linear infinite;
`

const FormWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 89px);
  padding: 90px 25px;

  @media (min-width: 1200px) {
    min-height: 100vh;
    padding: 25px;
  }
`

const variantsBtn = {
  default: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "#e7dfdd",
    color: "#0e0b16",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  hover: {
    backgroundColor: "#6882a1",
    color: "#0e0b16",
  },
  loading: {
    height: "60px",
    width: "60px",
    borderRadius: "100px",
    backgroundColor: "#eee",
    color: "#333",
  },
  success: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "#333",
    color: "#fff",
  },
  error: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "red",
    color: "#fff",
  },
}
const variantsBtnLight = {
  default: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "#0e0b16",
    color: "#e7dfdd",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  hover: {
    backgroundColor: "#6882a1",
    color: "#e7dfdd",
  },
  loading: {
    height: "60px",
    width: "60px",
    borderRadius: "100px",
    backgroundColor: "#eee",
    color: "#333",
  },
  success: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "#333",
    color: "#fff",
  },
  error: {
    width: "100%",
    borderRadius: "60px",
    backgroundColor: "red",
    color: "#fff",
  },
}

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const themeContext = useContext(ThemeManagerContext)
    return <Component {...props} themeContext={themeContext} />
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: "default",
      users: [{ name: "", email: "", allergien: "" }],
    }
    this.recaptchaRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addClick() {
    this.setState(prevState => ({
      users: [...prevState.users, { name: "", email: "", allergien: "" }],
    }))
  }

  createUI() {
    return this.state.users.map((el, i) => (
      <FieldGroupWrapper key={i}>
        <FieldGroup className="mainFields">
          <FieldGroup className="topFields">
            <TextInput
              id="name"
              label="Name"
              type="text"
              name="name"
              required
              className="rsvpInput rsvpInputName"
              value={el.name || ""}
              onChange={this.handleChange.bind(this, i)}
            />
             {i === 0 && (
          <TextInput
          id="email"
          label="Email"
          type="email"
          name="email"
          required
          className="rsvpInput"
          value={el.email || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        )}
            {i > 0 && (
          <TextInput
          id="email"
          label="Email"
          type="email"
          name="email"
          className="rsvpInput"
          value={el.email || ""}
          onChange={this.handleChange.bind(this, i)}
        />
        )}
          </FieldGroup>
          <FieldGroup className="btmFields">
            <TextInput
              id="allergien"
              label="Allergien"
              type="allergien"
              name="allergien"
              className="rsvpInput rsvpInputAllergien"
              value={el.allergien || ""}
              onChange={this.handleChange.bind(this, i)}
            />
          </FieldGroup>
        </FieldGroup>
        {i > 0 && (
          <UiButtonRemove
            type="button"
            onClick={this.removeClick.bind(this, i)}
          >
            x
          </UiButtonRemove>
        )}
      </FieldGroupWrapper>
    ))
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ formState: "loading" })
    var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
      "appDZ4SBImyyhhIc9"
    )

    try {
      const token = await this.recaptchaRef.current.executeAsync()
      const response = await base("Gaeste")
      this.state.users.map(user => {
        base("Gaeste").create({
          Name: `${user.name}`,
          Email: `${user.email}`,
          Allergien: `${user.allergien}`,
        })
        return response
      })
      const result = await response
      console.log(result)
      setTimeout(() => this.setState({ formState: "success" }), 1500)
      setTimeout(() => this.setState({ formState: "hidden" }), 1500)
      setTimeout(() => this.handleConfetti(), 2000)
    } catch (error) {
      console.error(error)
      this.setState({ formState: "error" })
    }
  }

  handleConfetti = e => {
    var duration = 4 * 1000
    var animationEnd = Date.now() + duration
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      var particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      )
    }, 250)
  }

  handleChange(i, e) {
    const { name, value } = e.target
    let users = [...this.state.users]
    users[i] = { ...users[i], [name]: value }
    this.setState({ users })
  }
  removeClick(i) {
    let users = [...this.state.users]
    users.splice(i, 1)
    this.setState({ users })
  }
  render() {
    const themeContext = this.props.themeContext
    return (
      <>
      <SEO title="Zusagen" />
        <FormWrapper>
          <AnimateSharedLayout>
            {this.state.formState === "hidden" && (
              <motion.div
                layout
                initial={{ height: 0 }}
                animate={{ height: "166px" }}
                exit={{ height: 0 }}
              >
                <SucessMsg>
                  <h2>Vielen Dank, wir freuen uns auf dich!</h2>
                </SucessMsg>
              </motion.div>
            )}
            {this.state.formState !== "hidden" && (

                <RsvpForm onSubmit={this.handleSubmit.bind(this)}>
                  <ReCAPTCHA
                    ref={this.recaptchaRef}
                    size="invisible"
                    sitekey={process.env.GATSBY_GOOGLE_SITE_KEY}
                  />
                  {this.createUI()}
                  <UiButton type="button" onClick={this.addClick.bind(this)}>
                    Gast hinzufügen
                  </UiButton>
                  {themeContext.isDark ? (
                    <SubmitBtn
                      key="formSubmit"
                      animate={this.state.formState}
                      variants={variantsBtn}
                      type="submit"
                      value="Absenden"
                      initial="default"
                      whileHover="hover"
                    >
                      {this.state.formState === "default" && (
                        <span>Abschicken</span>
                      )}
                      {this.state.formState === "loading" && <Spinner />}
                      {this.state.formState === "success" && <span></span>}
                      {this.state.formState === "error" && (
                        <span>
                          Da ist was schief gelaufen :/ Bitte versuche es erneut
                        </span>
                      )}
                    </SubmitBtn>
                  ) : (
                    <SubmitBtn
                      key="formSubmitLight"
                      animate={this.state.formState}
                      variants={variantsBtnLight}
                      type="submit"
                      value="Absenden"
                      initial="default"
                      whileHover="hover"
                    >
                      {this.state.formState === "default" && (
                        <span>Abschicken</span>
                      )}
                      {this.state.formState === "loading" && <Spinner />}
                      {this.state.formState === "success" && <span></span>}
                      {this.state.formState === "error" && (
                        <span>
                          Da ist was schief gelaufen :/ Bitte versuche es erneut
                        </span>
                      )}
                    </SubmitBtn>
                  )}

                  <small>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </small>
                </RsvpForm>

            )}
          </AnimateSharedLayout>
        </FormWrapper>
      </>
    )
  }
}

export default withMyHook(NameForm)
