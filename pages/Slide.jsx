import React from "react";

import Carousel from "react-bootstrap/Carousel";

export default function App() {
  return (
    <div style={{ display: "block", width: 1000, padding: 10 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h3> How To Develop a Server in Python</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>You can use a variety of libraries and frameworks that provide server functionality. 
                One popular library for building servers in Python is Flask.
                 Here are the general steps to create a simple server with Flask</h4>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>Install Flask: You can install Flask using pip, the Python package manager, 
                by running pip install Flask in your terminal or command prompt. </h4>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="
            https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>Import Flask: In your Python file, you'll need to import the Flask library using from flask import Flask. </h4>{" "}
            <p>
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>Create a Flask application: You can create a Flask application by instantiating a Flask object, 
                like this: app = Flask(__name__).</h4>
            <p>
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>Define routes: A route is a URL endpoint that the server can respond to. You can define routes using the @app.route() decorator.
                 For example, to create a route for the root URL "/", you can define a function like this:</h4>
            <p>

            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h4>Your code should look like this </h4>
            <p>
            <img
            className="d-block "
            src="https://i.postimg.cc/3wtjZ7L5/py-server.png"
            alt=""
          />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
       
          <Carousel.Caption>
            <h4>You can then run this server by running the Python file in your terminal or command prompt using python yourfile.py.
                 You can then access the server by going to http://localhost:5000 in your web browser. </h4>
            <p>
            <img
            className="d-block "
            src="https://i.postimg.cc/qRgsbYYt/py-server2.png"
            alt=""
          />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block "
            src="https://i.postimg.cc/x1DsYbwR/background-6571635-1920.png"
            alt=""
          />
          <Carousel.Caption>
            <h3>Thank You For Watching!</h3>
            <p>Like, Share, Subcribe to my channele</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
