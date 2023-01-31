const { io } = require("socket.io-client")

console.log("Client started")
const socket = io('http://127.0.0.1:3000/master')

socket.on("connect", (receive) => {
    console.log("try to connect master namespace...")

    socket.on('download', (message) => {
        console.log(`message from sise server : ${message}`)
    })

    socket.emit("download", "oversea")
})