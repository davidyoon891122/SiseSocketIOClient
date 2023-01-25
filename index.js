const { io } = require("socket.io-client")

console.log("Client started")
const socket = io('http://127.0.0.1:3000/sise')

socket.on("connect", (receive) => {
    console.log("try to connect...")

    socket.emit("service", "sise")

    socket.on('service', (message) => {
        console.log(`message from sise server : ${message}`)
    })

    socket.on('sise', (data) => {
        console.log(`sise: ${data}`)
    } )

})