const axios = require("axios")
const fetch = require("node-fetch")


exports.handler =  async (event, context, callback) => {
    const gauth = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Ld1Er8ZAAAAADOetpFKXofKd7EsU6DH0zagiwE_&response=${event.body}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error))
    return callback(null, {
        statusCode: 200,
        body: gauth,
        gauth  
    })
    
  }