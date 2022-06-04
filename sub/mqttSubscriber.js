var mqtt = require('mqtt')
var client  = mqtt.connect(process.env.THEHOST)

client.on('connect', function () {
  console.log(`Conexión`);
  client.subscribe(process.env.THETOPIC)
})

client.on('message', function (topic, message) {

  console.log(message.toString())

})