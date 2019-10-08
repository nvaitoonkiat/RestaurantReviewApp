import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button, Radio } from "antd";

export class AddRestaurant extends Component {
  handleFormSubmit = (event, requestType, restaurantID) => {
    event.preventDefault();
    const restid = event.target.elements.restid.value;
    const restname = event.target.elements.restname.value;
    const streetaddress = event.target.elements.streetaddress.value;
    const countrycode = event.target.elements.countrycode.value;
    const cityid = event.target.elements.cityid.value;
    const zip = event.target.elements.zip.value;

    //   console.log(restname, address);
    switch (requestType) {
      case "post":
        axios
          .post("http://127.0.0.1:8000/Restaurants/create/", {
            restid: restid,
            restname: restname,
            streetaddress: streetaddress,
            countrycode: countrycode,
            cityid: cityid,
            zip: zip
          })
          .then(res => console.log(res));

      case "put":
        axios
          .post(`http://127.0.0.1:8000/Restaurants/${restaurantID}`, {
            restid: restid,
            restname: restname,
            streetaddress: streetaddress,
            countrycode: countrycode,
            cityid: cityid,
            zip: zip
          })
          .then(res => console.log(res));
    }
  };

  render() {
    function refreshPage() {
      window.location.reload();
    }
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.restaurantID
            )
          }
        >
          <Form.Item label="Form Layout" />
          <Form.Item label="Restaurant id">
            <Input name="restid" placeholder="Put id of restaurant" />
          </Form.Item>

          <Form.Item label="Restaurant name">
            <Input name="restname" placeholder="Put name of restaurant" />
          </Form.Item>

          <Form.Item label="Country code">
            <Input name="countrycode" placeholder="Input name of country" />
          </Form.Item>

          <Form.Item label="City">
            <Input name="cityid" placeholder="Put restaurant city" />
          </Form.Item>

          <Form.Item label="Address">
            <Input name="streetaddress" placeholder="Enter Street address" />
          </Form.Item>

          <Form.Item label="Zip Code">
            <Input name="zip" placeholder="Enter Zip code" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={refreshPage}>
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddRestaurant;
