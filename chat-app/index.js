const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

// Correcting the file path for index.html
app.get("/", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Socket.io
io.on("connection", (socket) => {
    console.log("A user connected");

    // Listening for a 'Message' event :
    socket.on('Message:', (message) => {
        io.emit("message", message);
    });

    socket.on("disconnect", () => {
        io.emit("message", "A user has disconnected");
    });
});

server.listen(9000, () => console.log(`Server started at PORT:9000`));
