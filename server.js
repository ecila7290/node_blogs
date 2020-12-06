require('dotenv').config()
const { PORT } = process.env
const http=require('http')
const app=require('./app')
const server=http.createServer(app)
const prisma=require('./index')

const start=async ()=>{
    try {
        server.listen(PORT, '127.0.0.1', ()=>console.log('server is listening'))
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
    }
}

start()