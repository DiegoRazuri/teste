var  http =  require('http')
var express = require('express')
var path = require('path')

//configuracion de autenticacion con passport


//configuracion de server
const app = express()
const server = http.createServer(app)








//configuracion de archivos estaticos
app.use(express.static('public'))



//configuracion de ruteo
app.get('*', function (req, res){
	res.sendFile(path.join(__dirname, '../../public', 'index.html'))
})

//levantamiento de servidor
server.listen(process.env.PORT || 3000, () => console.log("servidor iniciado"))

//cambiar las api_keys
//PORT=3000 LINKEDIN_SECRET_KEY=sUuJfZcShRm6MbrX LINKEDIN_API_KEY=771w9ponelb7k0 FACEBOOK_APP_ID=715593598509472 FACEBOOK_APP_SECRET=4b82d62979632cb84e84aca91a1693a8 npm run start
