const errorGenerator= e=>{
    const error= new Error(e.message)
    error.statusCode=e.statusCode
    throw error
}