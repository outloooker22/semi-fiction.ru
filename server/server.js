let counter = 0
const http = require("http")

const server = http.createServer((request, response) => {
    response.write("server worktime: " + counter + " s")
    response.write("server worktime 1: " + counter + " s")
    response.end()
})


server.listen(3007)






setInterval(()=> {
counter++
console.log("Время работы сервера: " + counter + " секунд")
},1000)