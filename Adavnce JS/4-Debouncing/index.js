let counter = 0
const getData=(e) => {
    // do api call here
    console.log("Key Pressed",counter++,e)
}

const debounce=(fn,d)=>{
    // fn will not call again and again
    let timer
    
    return function(...args){
        let context = this
        console.log('context',context)
        // args=arguments
        // console.log('args',args)
        // if the key stokes occurs between that delay we have to clear timeout
        // whenever a new function call is made we have to clear this timeout
        clearTimeout(timer)
        timer=setTimeout(()=>{
            // console.log('context',context)
            fn.apply(context,args)
        },d)
    }
}
// const betterFunction = (e) => {
//     return function() {
//         return e.target.value
//     }
// }
const betterFunction=debounce(getData,500)
