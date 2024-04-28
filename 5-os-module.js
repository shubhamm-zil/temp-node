const os=require('os')
console.log(os.userInfo())
console.log("the uptime is",os.uptime(),"in seconds")

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
