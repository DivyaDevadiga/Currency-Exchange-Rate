import React from "react";
import Button from "react-bootstrap/Button";
import { Dropdown, Container, Row, Col } from "react-bootstrap/";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/InputGroup";

//import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

function onClickFunc() {
  // return console.log(document.getElementById("amount").value);

  return <h4>{this.date} </h4>;
}

class Converter extends React.Component {
  state = {
    input: "",
    date: "",
    ipUSD: 0,
    ipEUR: 0
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.ipUSD = e.target.value;

    console.log(this.ipUSD + "  " + +"  ");

    this.ipEUR = this.data.rates.EUR * this.ipUSD;
    //  console.log("ramesh test....", this.ipEUR);
  };

  async componentDidMount() {
    const url = "https://api.exchangeratesapi.io/latest?base=USD";
    const historyurl =
      "https://api.exchangeratesapi.io/history?start_at=2019-07-21&end_at=2019-08-03&base=USD";
    const response = await fetch(url);
    const responseofhis = await fetch(historyurl);

    this.data = await response.json();
    this.datahis = await responseofhis.json();

    console.log(this.data);
    console.log(this.data.rates.EUR);

    console.log(this.datahis);
    console.log(this.datahis.rates);

    console.log(Object.values(this.datahis.rates));
    const myArr = [Object.values(this.datahis.rates)];
    console.log(myArr);
  }

  render() {
    // const [curObject.values(this.datahis.rates)rencies ,base,amount,convertto,resuts, date]= this.state

    //  const padding = {
    //    Padding: "16px"
    //  };

    //  const mdbody = {};

    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            {/* <Col xs={12} md={8}>
              <h4> Content </h4>
            </Col> */}

            <Col xs={12} md={5} lg={5} className="padding">
              <p> Base Currency </p>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  USD
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>USD</Dropdown.Item>
                  <Dropdown.Item>CHF</Dropdown.Item>
                  <Dropdown.Item>Tamilnadu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col xs={12} md={5} lg={5} className="padding">
              <p> Target Currency </p>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  EUR
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>EUR</Dropdown.Item>
                  <Dropdown.Item>CHF</Dropdown.Item>
                  <Dropdown.Item>Tamilnadu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col xs={12} md={5} lg={5} className="padding">
              <InputGroup className="border">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Enter Amount
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Enter the Amount to be converted"
                  aria-label="fdfffvdvdvdvdvUsername"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>

            <Col xs={12} md={5} lg={5} className="padding">
              <InputGroup className="border">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    Max Waiting Date
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>

        <h4> Enter Amount to convert </h4>
        <input
          id="amount"
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={this.handleChange}
        />
        <br />
        <h4> Enter Maximum waiting Date </h4>
        <input type="text" placeholder="Date in YYYY-MM-DD Format" />

        <br />
        <h2 id="results">
          {this.ipUSD} USD is {this.ipEUR} EUR
        </h2>
        <Button variant="primary" onClick={onClickFunc}>
          {" "}
          Find the Best Time To Exchange{" "}
        </Button>
      </div>
    );
  }
}

export default Converter;
