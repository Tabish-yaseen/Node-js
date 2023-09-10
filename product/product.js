let product=(x,y)=>{
    return x*y
}
console.log(product(5,6))


let obj={
    name:"tabish",
    age:25,
    print:function(){
        return `my name is ${this.name} and my age is ${this.age}`
    }
}
console.log(obj.print())