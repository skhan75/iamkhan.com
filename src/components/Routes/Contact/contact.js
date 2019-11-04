import React, { Component } from 'react';
import Layout from "../../../hoc/layouts/layout";
import * as Icon from "react-feather";
import Sectiontitle from "../../Widgets/sectionTitle";
import contactData from '../../../data/contact';

class Contact extends Component {
  state = {
    phoneNumbers: [],
    emailAddress: [],
    address: "",
    formdata: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    error: false,
    message: ""
  }

  componentDidMount(){
    this.setState({
      phoneNumbers: contactData.contact.phoneNumbers,
      emailAddress: contactData.contact.emailAddress,
      address: contactData.contact.address
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    if( !this.state.formdata.name ){
      this.setState({
        error: true,
        message: 'Name is required'
      })
    } else if( !this.state.formdata.email ){
      this.setState({
        error: true,
        message: 'Email is required'
      })
    } else if( !this.state.formdata.subject ){
      this.setState({
        error: true,
        message: 'Subject is required'
      })
    } else if( !this.state.formdata.message ){
      this.setState({
        error: true,
        message: 'Message is required'
      })
    } else{
      this.setState({
        error: false,
        message: 'You message has been sent!!!'
      })
    }
  }
  handleChange = (event) => {
    this.setState({
       formdata:{
         ...this.state.formdata,
         [event.currentTarget.name] : event.currentTarget.value
       }
    })
  };

  numberFormatter(number){
    const phnNumber = number;
    return phnNumber;
  };

  render() {
    const handleAlerts = () => {
      if(this.state.error && this.state.message){
        return (
          <div className="alert alert-danger mt-4">
            {this.state.message}
          </div>
        )
      } else if(!this.state.error && this.state.message){
        return (
          <div className="alert alert-success mt-4">
            {this.state.message}
          </div>
        )
      } else{
        return null;
      }
    }
    return (
      <Layout>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contact Me"/>
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form action="#" className="mi-form mi-contact-form" onSubmit={this.handleSubmit}>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">Enter your name*</label>
                      <input onChange={this.handleChange} type="text" name="name" id="contact-form-name" value={this.state.formdata.name}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">Enter your email*</label>
                      <input onChange={this.handleChange} type="text" name="email" id="contact-form-email" value={this.state.formdata.email}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">Enter your subject*</label>
                      <input onChange={this.handleChange} type="text" name="subject" id="contact-form-subject" value={this.state.formdata.subject}/>
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">Enter your Message*</label>
                      <textarea onChange={this.handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={this.state.formdata.message}></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">Send Mail</button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {!this.state.phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone/>
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Phone</h6>
                        {this.state.phoneNumbers.map(phoneNumber =>(
                          <p key={phoneNumber}><a href={this.numberFormatter(phoneNumber)}>{phoneNumber}</a></p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!this.state.emailAddress ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail/>
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {this.state.emailAddress.map(email => (
                          <p key={email}><a href={`mailto:${email}`}>{email}</a></p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!this.state.address ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin/>
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Address</h6>
                        <p>{this.state.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
