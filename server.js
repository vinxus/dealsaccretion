const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
  host: 'mail.dealsaccretion.com', // e.g. smtp.gmail.com
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.use(express.json()); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/send', (req, res, next) => {
  const name = req.body.name
  const sector = req.body.sector
  const email_from = req.body.email
  // const email = req.body.email
  const email = 'admin@dealsaccretion.com'
  const message = "Message from: " + name + "<br/> Email: " + email_from + "<br/>Sector: " + sector + "<br/>" + req.body.message


  var mail = {
    from: name,
    to: email,  
    subject: 'Contact form request',

    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})