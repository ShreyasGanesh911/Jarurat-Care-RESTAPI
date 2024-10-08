const AsyncHandler = (passedFunction)=>(req,res,next)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next)
}
export default AsyncHandler