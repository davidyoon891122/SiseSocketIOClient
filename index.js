const { io } = require("socket.io-client")

console.log("Client started")
const socket = io('http://127.0.0.1:3000')

socket.on("connect", () => {
    console.log("try to connect...")
})