const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.VONAGE_KEY,
  apiSecret: process.env.VONAGE_SECRET
})

const from = "18335789211"
const to = "12037074230"

//handle req 
export default function handler(req, res) {  

    const ip = req.body.data.ip
    const domain = req.body.data.asn.domain
    const city = req.body.data.city
    const region = req.body.data.region   
    const text = `Someone from ${city}, ${region} viewed your website.  Domain: ${domain} IP Address: ${ip}`
    console.log(text)
    //create text message 
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);  
        } else {
            if(responseData.messages[0]['status'] === "0") {    
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })


    res.status(200).json({ name: 'John Doe' }) 
  }