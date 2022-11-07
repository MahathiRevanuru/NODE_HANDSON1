const http=require('http');
const data={
    fname:'Revanuru',
    lname:'Mahathi',
    age:25,
    

}
const server=http.createServer((req,res)=>{
    res.write("<h1> HELLO </h1>");
    res.write(JSON.stringify(data));
    res.end();

})
server.listen(4000,()=>{
    console.log("handson 1 is running")
})