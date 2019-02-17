import React, { Component } from "react";
import { Form, FormGroup, Input, Spinner } from "reactstrap";
import { Element } from "react-scroll";
import axios from "axios";

import {
  ContactContainer,
  ContentWrapper,
  ContactHeader,
  ContactSubHeader,
  ContactForm,
  ButtonWrapper,
  SocialWrapper,
  Astyle,
  CopyrightText
} from "./ContactStyles";
import Alert from "react-s-alert";
import Button from "../Button/Button";
class Contact extends Component {
  state = { name: "", email: "", message: "", loading: false, errors: null };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, email, message } = this.state;
    axios
      .post("https://jbmiranda-server-01.herokuapp.com/api/contact", {
        name,
        email,
        message
      })
      .then(() => {
        this.setState({ loading: false });
      })
      .then(() =>
        Alert.success(
          `Hey! Thanks for contacting me. I'll get back to you soon as I can.`
        )
      )
      .catch(errors => {
        this.setState({ errors, loading: false });
      });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <Element name="Contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
          style={{ background: "#182327" }}
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
        </svg>
        <ContactContainer>
          <ContentWrapper>
            <ContactHeader>
              Contact
              <div className="header-bar" />
            </ContactHeader>
            {this.state.loading && (
              <Spinner
                md="auto"
                style={{ margin: "0 auto", display: "block" }}
                color="success"
              />
            )}
            <ContactSubHeader>Want to work together?</ContactSubHeader>
            <ContactForm>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    bsSize="lg"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    bsSize="lg"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    value={message}
                    placeholder="Message"
                    bsSize="lg"
                    style={{ height: "200px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
            </ContactForm>
            <ButtonWrapper>
              <Button
                name="Send Message"
                color="#c0c0c0"
                border="2px solid #E5FCF5"
                bgColor="#131928"
                hoverFontColor="#FEFFFE"
                borderColor="#B3DEC1"
                width="180px"
                fontSize="1.2rem"
                type="submit"
                onClick={this.handleSubmit}
              />
            </ButtonWrapper>
            <SocialWrapper>
              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </Astyle>

              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </Astyle>

              <Astyle href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium" />
              </Astyle>
              <Astyle
                href="mailto:jbmiranda22796@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope" />
              </Astyle>
            </SocialWrapper>
            <CopyrightText>John Benedict Miranda ©2019</CopyrightText>
          </ContentWrapper>
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;
