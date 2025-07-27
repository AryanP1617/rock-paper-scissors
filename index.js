let choice,computer_choice;
let attempts=3;
let player_win=0,computer_win=0;

while(attempts>0)
{
    choice=Number(prompt("Enter 1 for rock 2 for paper and 3 for scissors"));
    computer_choice=Math.floor(Math.random()*3)
    if(choice==computer_choice)
    {
        console.log("It is a tie");
    }
    else
    {
        if((choice==1 && computer_choice==3)||(choice==2 && computer_choice==1)||(choice==3 && computer_choice==2))
        {
            console.log(`The player choice:${choice}\nThe computer choice:${computer_choice}\nThe player wins this round`);
            player_win++;
        }
        else if((computer_choice==1 && choice==3)||(computer_choice==2 && choice==1)||(computer_choice==3 && choice==2))
        {
            console.log(`The player choice:${choice}\nThe computer choice:${computer_choice}\nThe computer wins this round`);
            computer_win++;   
        }
    }
    attempts--;

}

if(player_win>computer_win)
{
    console.log("The player wins");
}
else if(player_win<computer_win)
{
    console.log("The computer wins");
}
else
{
    console.log("It is a tie");
}