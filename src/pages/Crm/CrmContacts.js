import React, { useEffect, useState, useCallback, useMemo } from "react";

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Table,
  FormFeedback
} from "reactstrap";

import BreadCrumb from "../../Components/Common/BreadCrumb";

import 'react-toastify/dist/ReactToastify.css';
import API from "../../common/data/FatchData";


const CrmContacts = () => {
  

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    company: "",
    WebSite : "",
    LifeCyclestage: ""
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);

     
      API.postNewContact(formData).then((response) => {
         setSuccessMessage(response.data.message);
        console.log(`deal created ${response.data}`);
        // setMostPannelsSold(response.data.Price);
      })
      .catch((error) => {
      });
  





  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('Failed to Create Deals');
 
      }, 15000); // Display success message for 3 seconds
      return () => clearTimeout(timeout);
    }
  
  }, [successMessage]);


  
  document.title = " Create Contact | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>



    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Creates Contact" pageTitle="ContactsCreate" />
        <Row>
          <Col xs={10}>

            <h1> Create Contracts </h1>

            <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">Contracts Information</h2> */}



      



      <form onSubmit={handleSubmit}>
        <div className="mb-4">
       
                <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Email
                    </Label>
                    <Input
                      type="email"
                        id="email"
                      name="email"
                      value={formData.email}
                    onChange={handleChange}
                       placeholder="Enter email"
                        />
                   
                  </div>
                </CardBody>

                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Firstname
                    </Label>
                    <Input
                        type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Last Name
                    </Label>
                    <Input
                       type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.dealname}
                      onChange={handleChange}
                      placeholder="Enter Deal Name"
                        />
                   
                  </div>
                </CardBody>



                
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Phone
                    </Label>
                    <Input
                     type="text"
                     id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone"
                        />
                   
                  </div>
                </CardBody>



                 
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Company
                    </Label>
                    <Input
                     type="text"
                     id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter Company Name"
                        />
                   
                  </div>
                </CardBody>


                 <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    WebSite
                    </Label>
                    <Input
                     type="text"
                     id="WebSite"
                      name="WebSite"
                      value={formData.WebSite}
                      onChange={handleChange}
                      placeholder="Enter WebSite"
                        />
                   
                  </div>
                </CardBody> 


                {/* <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Deal Stage
                    </Label>
                    <Input
                     type="text"
                     id="pipeline"
                      name="pipeline"
                      value={formData.pipeline}
                      onChange={handleChange}
                      placeholder="Enter pipeline"
                        />
                        
                   
                  </div>
                </CardBody> */}


                <CardBody>
                  <div className="mb-3">
                    
                    <Label className="form-label" htmlFor="product-title-input">
                    Life Cycle Stage
                    </Label>
                    <select
                    id="LifeCyclestage"
                   name="LifeCyclestage"
                   value={formData.LifeCyclestage}
                   onChange={handleChange}
                        >
                          <option value="">Select Deal Stage</option>
                        <option value="subscriber">subscriber</option>
                        <option value="lead">lead</option>
                        <option value="marketingqualifiedlead">marketingqualifiedlead</option>
                        <option value="salesqualifiedlead">salesqualifiedlead</option>
                        <option value="opportunity">opportunity</option>
                        <option value="customer">customer</option>
                        <option value="evangelist">evangelist</option>
                        <option value="other">other</option>
                        </select>


                   
                  </div>
                </CardBody>

                {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded-md mb-4">
            {successMessage}
          </div>
        )} 

                {/* <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Submit 
        </button> */}

        <div className="text-center mb-3">
                <button type="submit" className="btn btn-secondary align-bottom">
                  Submit
                </button>
                </div>

      
              </Card>


        </div>
      
   
       
      
        
      </form>

      
    </div>



          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  );
};

export default CrmContacts;