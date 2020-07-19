// arrow 


Let Ask = (question, yes, no) => { if(confirm(question))yes()
    Else no();
    }
    Ask("do you agree? ", 
    Yes=>{alert("You agreed") }, 
    No=>{alert(" You cancelled the execution") ;}
    ) ;