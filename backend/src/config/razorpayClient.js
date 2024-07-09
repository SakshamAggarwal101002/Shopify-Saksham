const Razorpay = require('razorpay');

apiKey="rzp_test_6WbuHKDntZmPa4"
apiSecret="P6TUE7HkGJccjb8j7y9il78i"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;