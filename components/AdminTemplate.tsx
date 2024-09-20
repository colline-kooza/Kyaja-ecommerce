import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface YelpRecentLoginEmailProps {
    userFirstName?: string;
    loginDate?: Date;
    loginDevice?: string;
    loginLocation?: string;
    loginIp?: string;
  }
  
  export const YelpRecentLoginEmail = ({
    name, email, phone, address, totalOrderAmount
  }: {
    name:string,
    email:string ,
    phone:string,
    address:string ,
    totalOrderAmount:number
  }) => {
    
  
    return (
      <Html>
        <Head />
        <Preview>Yelp recent login</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img src={`https://res.cloudinary.com/dirpuqqib/image/upload/v1726769055/logo2_lygob7.png`} />
            </Section>
  
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={620}
                  src={"https://media.istockphoto.com/id/1324465031/photo/high-angle-view-close-up-asian-woman-using-meal-delivery-service-ordering-food-online-with.jpg?s=612x612&w=0&k=20&c=fvBRmqFb-nYK46nrfC9091HH72a4anMzWoojG7WyDMk="}
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Hi Admin Kyaja,
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    We noticed a You have a new order. From Client Details below
                  </Heading>
  
                  <Text style={paragraph}>
                    <b>Name: </b>
                    {name}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email: </b>
                    {email}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Location: </b>
                    {address}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Phone Number: </b>
                    {phone}
                  </Text>
                  <Text
                    style={{
                      color: "rgb(0,0,0, 0.5)",
                      fontSize: 14,
                      marginTop: -5,
                    }}
                  >
                    *The total amount from the order is :
                    {totalOrderAmount}
                  </Text>
  
                  <Text style={paragraph}>
                    Kindly respond To the Client Immediately.
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    Thank you
                  </Text>
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton} colSpan={2}>
                  <Button style={button}>Learn More</Button>
                </Column>
              </Row>
            </Section>
  
            <Section style={containerImageFooter}>
              <Img
                style={image}
                width={620}
                src={"https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.jpg?s=612x612&w=0&k=20&c=t_0z_Vm6_5vmzuwZl6HydbwsYesuHcbF-uRU23KtOvk="}
              />
            </Section>
  
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2025 | Yelp Inc., Kyaja.com
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  YelpRecentLoginEmail.PreviewProps = {
    userFirstName: "Alan",
    loginDate: new Date("September 7, 2022, 10:58 am"),
    loginDevice: "Chrome on Mac OS X",
    loginLocation: "Upland, California, United States",
    loginIp: "47.149.53.167",
  } as YelpRecentLoginEmailProps;
  
  export default YelpRecentLoginEmail;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  