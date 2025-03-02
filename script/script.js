const time = new Date()
const time1 = time.toLocaleTimeString();


completeButtons = document.querySelectorAll('.completed-button')
for(let i=0 ; i< completeButtons.length ; i++){
 const button = completeButtons[i];
button.addEventListener("click",
        function(event){
           console.log(event.target)
            alert("board updated successfully");
            const taskNumber = document.getElementById("task-number").innerText;
            const taskNumber1 = parseInt(taskNumber);
            const nextTaskNumber = taskNumber1 + 1;
            console.log(nextTaskNumber);
            document.getElementById("task-number").innerText = nextTaskNumber;
    
            const number = document.getElementById("number").innerText;
            const number1 = parseInt(number);
            const nextNumber = number1 - 1;
            console.log(nextNumber);
            document.getElementById("number").innerText = nextNumber;
            
            const section = document.getElementById("blank-div");
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.innerText = `You have Complete The Task  at 
            `
            div.appendChild(p);
            section.appendChild(div);
         
        
        
            

            button.setAttribute("disabled",true);
            completeButtons[i].setAttribute("disabled",true);
            
        }
    )
}


    document.getElementById("btn").addEventListener("click",function(){
        document.getElementById("blank-div").innerText = " ";
    })
     
    document.getElementById("discover-box").addEventListener("click",function(){
        window.location.href = "blog.html"
    })
    
    document.getElementById("btn-theme").addEventListener("click",function(){
        const themes = ["bg-orange-400","bg-blue-400","bg-cyan-400","bg-pink-400"];
        for(const theme of themes ){
            document.getElementById("body").style.background = theme;

        }
    })
        
 const date = new Date();
const specificDate =date.toDateString("en-GB")

 document.getElementById("date").innerText = specificDate;


 document.getElementById("btn-theme").addEventListener("click",function(){
    const colors = ["bg-orange-400","bg-blue-300", "bg-pink-200" ,"bg-gray-300"];
    const btnTheme = document.getElementById("btn-theme");
    for( const color of colors){
      btnTheme.classList.add(color);
    
    }
 
 })