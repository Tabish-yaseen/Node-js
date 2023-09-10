let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
let transformedarray=arr.map((element)=>{
    if(element==' '){
        return 'empty string'

    }
    return element
})
console.log(transformedarray)