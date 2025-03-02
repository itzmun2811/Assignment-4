const time = new Date()
const time1 = time.toLocaleTimeString();
document.getElementById("blank-div").style.display = "none";



completeButtons = document.querySelectorAll('.completed-button')
for(let i=0 ; i< completeButtons.length ; i++){
 const button = completeButtons[i];
button.addEventListener("click",
        function(event){
           
            alert("Board updated Successfully");
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
            if(nextNumber < 1){
           alert("Congrats! You have completed the current task")
            };
            
            const section = document.getElementById("blank-div");
            document.getElementById("blank-div").style.display = "block";
            const title =event.target.parentNode.parentNode.firstChild
                .nextSibling.nextElementSibling.innerText
                ;
            console.log(title)
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.innerText = `You have Complete The Task  ${title}  at ${time1}
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
        document.getElementById("blank-div").style.display = "none";

    })
     
    document.getElementById("discover-box").addEventListener("click",function(){
        window.location.href = "blog.html"
    })
    
  
        
 const date = new Date();
const specificDate =date.toDateString("en-GB")

 document.getElementById("date").innerText = specificDate;


 document.getElementById("btn-theme").addEventListener("click",function(){
    const colors =['slateblue', 'Violet' ,'LightGray','mediumSeaGreen','lightRed','lightOrange','lightyellow','pink']

    const color = (Math.random() * colors.length)
    const changetheme = colors[Math.floor(color)]
    document.body.style.backgroundColor = changetheme;
    
    
 
 })