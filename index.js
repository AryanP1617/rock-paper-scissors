    let choice,computer_choice;


    document.querySelectorAll(".buttons").forEach(button => {
        button.addEventListener("click",()=>
        {
            document.getElementById("display").textContent = "";
            choice=parseInt(button.dataset.choice);
            playround(choice)
        });
    });

    document.getElementById("resetbutton").addEventListener("click",()=>{
        document.getElementById("display").textContent = "";
    })
    function playround(choice)
    {
        computer_choice=Math.floor(Math.random()*3)+1;
        let parentNode=document.getElementById("display");
        let childNode=document.createElement("p");
        if(choice==computer_choice)
        {
            
            childNode.textContent="It is a tie";
            
            
        }
        else
        {
            if((choice==1 && computer_choice==3)||(choice==2 && computer_choice==1)||(choice==3 && computer_choice==2))
            {
                
                childNode.textContent="Player wins";
                
            }
            else if((computer_choice==1 && choice==3)||(computer_choice==2 && choice==1)||(computer_choice==3 && choice==2))
            {
                
                childNode.textContent="Computer wins";
                
            }
        }
        parentNode.appendChild(childNode);    
    }

