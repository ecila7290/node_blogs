const prisma = require('../index')
const { makeDataForCreate }=require('../utils')

const createUser=(fields)=>{
    const data=makeDataForCreate(fields)
    return prisma.users.create({ data })
}

const findUser=(field)=>{
    console.log(field)
    const [uniqueKey]=Object.keys(field)
    const isKeyId=uniqueKey==='id'
    const value=isKeyId ? Number(field[uniqueKey]) : field[uniqueKey]

    return prisma.users.findUnique({where:{[uniqueKey]: value}})
}