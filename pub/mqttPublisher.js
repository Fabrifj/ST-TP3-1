var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://10.1.2.106:1883')
const os = require('os');
const dockerIpTools = require("docker-ip-get");

let ip = '127.0.0.1';
dockerIpTools
.getContainerIp()
.then((containerIp) => ip=containerIp)
.catch((err) => console.error(err));

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

client.on('connect', function () {
  publish();
})

console.log( os.hostname() ); 

async function publish() {
  while(true){
    let message = `"time": ${''+new Date}, "container" :  ${os.hostname()}, "ip": ${''+ip}`;
    client.publish('ds2022', message);
    await sleep(5000);
  }
}
