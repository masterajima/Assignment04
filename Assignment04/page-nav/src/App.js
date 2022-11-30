import "./App.css";
import React, { useState, useEffect } from "react";
import { DatePicker, Row, Col } from "antd";
import { Card } from "antd";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { MyCard } from "/Components/MyCard.js";
function App() {
  const [blogs, setBlogs] = useState(null);
  const [status, setStatus] = useEffect(fasle);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/post")
      .then((response) => {
        setBlogs(response.data);
        setStatus(true);
      })
      .catch(() => {
        console.log("api call failed");
        setStatus(false);
      });
  }, []);
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row">Header</Col>
      </Row>
      <Row>
        <Divider orientation="center">Items</Divider>
      </Row>

      <Row gutter={16}>
        {status &&
          blogs.map((blogObj) => {
            return (
              <MyCard title={blogObj.title} content={blogObj.body}></MyCard>
            );
          })}
      </Row>
      <Row>
        <Routes>
          <Route></Route>
        </Routes>
      </Row>
    </div>
  );
}

export default App;
