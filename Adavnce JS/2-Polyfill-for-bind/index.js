// creating own bind method
let name1={
    firstName:'Deepak',
    lastName:'Kumar',
}
 
let printFullName=function(homeTown,state,country,role){
    console.log(this.firstName,"",this.lastName,"from",homeTown,state,country,role)
} 

let printName = printFullName.bind(name1,"Mumbai","MH")
printName('India','SDE')

Function.prototype.myOwnBind=function(...args){
    console.log('...args',args)
    let obj = this
    console.log(obj,args[0])
    var params=args.slice(1)
    console.log('params',params)
    return function(...args2){
        // obj.call(args[0],args[1],args[2])

        // [...params,...args2] it will like [params,args2]
        obj.apply(args[0],[...params,...args2])
        // obj.apply(args[0],params.concat(args2))
    }

}
let printName2=printFullName.myOwnBind(name1,"chennai","TN")
printName2('India','SDE_3')


let o=["dd","lolo"]
let c=["op","qppqp"]
console.log([...o,...c])

let jobs={
    fn:'SDE',
    gov:'GOVT'
}

let printJObs = function(country){
    console.log(this.fn,this.gov,country)
}
printJObs.call(jobs,"INd")