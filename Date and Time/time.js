let hour = document.getElementById("hrdis")
let minute = document.getElementById("mindis")
let second = document.getElementById("secdis")
let amdis = document.getElementById("amdis")






let format= document.getElementById("format")
format.addEventListener("change",()=>{



    if(format.value == 24){
        

    
        setInterval(timing,1000)
    
    
    function timing(){
        let obj= new Date()
        let hr=obj.getHours()
        let min=obj.getMinutes()
        let sec=obj.getSeconds()
        
    
    
        hour.textContent=`${hr}`
        minute.textContent=`${min}`
        second.textContent=`${sec}`
    
        
    
        if(hr >= 12){
    
            amdis.textContent="pm"
        }
        else{
            amdis.textContent="am"
        }
        
    }
    
    
    
    }
    
    
    if(format.value == 12){
    
        setInterval(timing,1000)
    
    
    function timing(){
        let obj= new Date()
        let hr=obj.getHours()
        let min=obj.getMinutes()
        let sec=obj.getSeconds()
    
    
        hour.textContent=`${hr}`
        minute.textContent=`${min}`
        second.textContent=`${sec}`
    
        
    
        if(hr >= 12){
    
            amdis.textContent="pm"
        }
        else{
            amdis.textContent="am"
        }
    
    
        if(hr == 0){
    
            hour.textContent="12"
        }
        if(hr >12){
            let dif = hr - 12;
            hour.textContent=`${dif}`
        }
        
    }
    
    }


})

let date = document.getElementById("dtdis")
let month = document.getElementById("mondis")
let year = document.getElementById("yrdis")


setInterval(calendar,1000)


function calendar(){
    let obj= new Date
    let dt = obj.getDate()
    let mon = obj.getMonth()
    let yr = obj.getFullYear()

    let x = ["jan","feb","mar","apr","may","jun","juy","aug","sep","oct","nov","dec"]

    let y = x[mon]

    


    date.textContent=`${dt}`
    month.textContent=`${y}`
    year.textContent=`${yr}`
}



