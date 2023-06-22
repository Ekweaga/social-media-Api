const passport = require("passport")
const express = require("express")
const db = require("../database/index")
const app = express();
const authRoutes = require("../routes/authRoutes")
const profileRoutes = require("../routes/profileRoutes")
const postRoutes = require("../routes/postRoutes")
const commentRoutes = require("../routes/commentRoutes")
  const bodyParser = require("body-parser")
  const swaggerJsdoc = require("swagger-jsdoc")
const   swaggerUi = require("swagger-ui-express");


db();

const PORT = 8000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(passport.initialize());
app.use("/auth",authRoutes)
//app.use("/userProfile",profileRoutes)
app.use("/post",postRoutes)
app.use("/comment",commentRoutes)



const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Social Media API  ",
        version: "0.1.0",
        description:
          "This is a simple social media API application with basics functionalities",
        license: {
          name: "",
          url: "https://spdx.org/licenses/MIT.html",
        },
       
      },
      servers: [
        {
          url: "http://localhost:8000",
        },
      ],
    },
    apis: ["./routes/authRoutes/*.js","./routes/postRoutes/*.js","./routes/commentRoutes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

app.listen(PORT, ()=>console.log("Express started, backendApis"))

