const express = require('express');
 
const mongoose = require('mongoose');
const app = express();
const User = require('../model/wash');
const Adminwebinar = require('../model/adminwebinar');

const router = express.Router();
var userRegistration = require('../model/Registration');
var bcrypt = require('bcryptjs');
const Events = require('../model/adminevent');
 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });
 
router.get('/', function(req, res) {
    User.find(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})
 
router.post('/addData', function(req, res) {
        // console.log("working")
        const name = req.body.name
        const email = req.body.email
        const feedback = req.body.feedback
        
        
        new User({
            name: name,
            email: email,
            feedback: feedback
  
        }).save(function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    })
    //////////////////////////////////////////test
  //   router.get('/', function(req, res) {
  //     User.find(function(err, data) {
  //         if (err) {
  //             console.log(err)
  //         } else {
  //             res.json(data)
  //         }
  //     })
  // })
  //   router.post('/addData', function(req, res) {
  //     // console.log("working")
  //     const name = req.body.cname
  //     const email = req.body.cemail
  //     const message = req.body.cmessage
      
      
  //     new User({
  //         name: cname,
  //         email: cemail,
  //         message: cmessage,
        

  //     }).save(function(err, data) {
  //         if (err) {
  //             console.log(err)
  //         } else {
  //             console.log(data)
  //             res.json(data)
  //         }
  //     })
  // })
    /////////////////////////////////////////test
    //////////////////////////////////////////////////////updating data///////////////////////////////////
// router.post('/update/:id', (req, res, next) => {
//     const id = req.params.id;
//     let UserUpdate = {
//         _id: id,
//         name: req.body.name,
//         subject: req.body.subject,
//         phone: req.body.phone,
//         email: req.body.email,
//         message: req.body.message
//     };
//     User.findOneAndUpdate({ _id: id }, UserUpdate, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             // console.log(data)
//             res.json(data)
//         }
 
//     })
// })

// GET DATA
router.get('/getData', function(req,res){
  User.find(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      res.json(data)
    }
  })
})
 
/////////////////edit
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, function(err, data) {
        res.json(data);
    })
})
 
//////////////////////////////////////////////////delete data///////////////////////////////////////////////
// router.get('/delete/:id', (req, res) => {
//     let id = req.params.id
//     User.findOneAndRemove(id, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json(data)
//             console.log(data)
//         }
//     })
// })

//////////////////////////////// USER SECTION /////////////////////////////////////////////////////
//////////////////////////////// User Registration /////////////////////////////////////////////
/////////////////////////////////Registration
router.post("/addRegistration", (req, res) => {
    console.log(req.body.firstName);
  
    userRegistration.findOne({ Email: req.body.Email }, (err, callbackData) => {
      if (err) console.log(err);
      else {
        if (callbackData) {
          res.json({ message: "Already Registered" });
        } else {
          if (req.body.Password == req.body.ConfirmPassword) {
            var salt = bcrypt.genSaltSync(10);
            const hashing = bcrypt.hashSync(req.body.Password, salt);
  
            new userRegistration({
              Name: req.body.Name,
              Email: req.body.Email,
              Phone: req.body.Phone,
              Password: hashing,
              ConfirmPassword: req.body.ConfirmPassword,
            
  
            }).save((err, callback) => {
              if (err) console.log(err);
              else res.json({ message: "registered" });
            });
          } else {
            res.json({ message: "Password doesn't matched" });
          }
        }
      }
    });
  }
  );
  
  ////////////////////// USER LOGIN ///////////////////////////////
  
  router.post('/login', (req, res) => {
    let regObj = {
      Email: req.body.Email,
      Password: req.body.Password
    }
    userRegistration.findOne({
      Email: regObj.Email
    },
      (err, cb) => {
        if (err) {
          res.json({ "message": err });
        }
        else {
          if (cb == null) {
            res.json({ "message": "Check Your Credentials" });
          }
          else {
            bcrypt.compare(regObj.Password, cb.Password, function (err, callbackData) {
              if (err) {
                // handle error
                console.log(err);
              }
              if (callbackData) {
                // Send JWT
                cb['token'] = cb.generateJwt();
                // console.log(cb.token);
                // console.log(data)
                // res.json(data);
                let responseObj = {
                  token: cb.token
                };
                console.log(responseObj);
                res.json(responseObj);
              }
              else {
                // response is OutgoingMessage object that server response http request
                res.json({ message: 'passwords do not match', success: false });
              }
            });
          }
        }
  
      })
  
    console.log(regObj);
  })

  /////////////////////////////////// USR SECTION END ////////////////////////////////////////////




  ///////////////////////////////////////// ADMIN DATA //////////////////////////////////////
  router.post('/plusData', function(req, res) {
    // console.log("working")
    const Image = req.body.Image
    const cardtitle = req.body.cardtitle
    const shortmessage = req.body.shortmessage
    
    
    new Adminwebinar({
        Image: Image,
        cardtitle: cardtitle,
        shortmessage: shortmessage

    }).save(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})
  
router.get('/adminwebinar', function(req,res){
  Adminwebinar.find(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      res.json(data)
    }
  })
})
/////////////////////////////////////Admin Event/////////////////////////////
router.post('/pluseventData', function(req,res){

  const Images = req.body.Images
  const cardtitles = req.body.cardtitles
  const shortmessages = req.body.shortmessages

  new Events({
    Images: Images,
    cardtitles: cardtitles,
    shortmessages: shortmessages

}).save(function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        res.json(data)
    }
})
})
router.get('/adminevent', function(req,res){
  Events.find(function(err,data){
    if(err){
      console.log(err)
    }
    else{
      res.json(data)
    }
  })
})

module.exports = router;