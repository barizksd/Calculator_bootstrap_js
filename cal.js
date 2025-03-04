function display(num){
    result.value += num
}

function cleard(){
    result.value = ""
}

function backs(){
    result.value = result.value.slice(0,-1)
}

function equal(){
    try{
        result.value = eval(result.value)
    }catch (erro){
        result.value ="Error"
        setTimeout(()=>{
            result.value = ""
        },1000)
    }
}