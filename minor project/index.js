const inp=document.querySelector(".inp");
const btn=document.querySelectorAll("button");
const ch=["%","+","-","/","*","^","%"];
let op="";
let op1="";
let op2="";
let op3="";
let op4="";
var pre=5;
var j=0,k=0;


function evaluation()
{
    for(var i=0;i<op.length;i++)
    {
        if(op[i]==="^")
        {
            j=i-1;
            while(op[j]!=="+" && op[j]!=="-" && op[j]!="*" && op[j]!="/" && op[j]!=="^" && op[j]!=="%" && j!==0 && j!==op.length)
            {
                
                j--;
                
            }
            k=j;
           
            if(j===0)
            {
                op1=op.toString().slice(j,i);
            }
            else{
                op1=op.toString().slice(j+1,i);
            }
            
            

            j=i+1;
            while(op[j]!=="+" && op[j]!=="-" && op[j]!="*" && op[j]!="/" && op[j]!=="^" && op[j]!=="%"  && j!==0 && j!==op.length)
            {
                j++;
            }
            op2=op.toString().slice(i+1,j);
    
            op3="";

            op3=Math.pow(op1,op2);
        
            
            op4=op.substring(0,k+1)+op.substring(j,op.length);   //to remove a^b
            
            op=op4;
          
            op4="";
            if(k===0)
            {
                op4=op.slice(0,k)+op3+op.slice(k+1);
            }
            else{
                op4=op.slice(0,k+1)+op3+op.slice(k+1);
            }
            
            op=op4;
            
            op4="";
        }
    }
    op=eval(op);
    inp.value=op;
}

const calculate=(btnval)=>{
    event.preventDefault();

    if(ch.includes(btnval) && ch.includes(pre)){
        alert("consecutive operations are not allowed. plase enter operation between operands only");
    }

    else{

    if(btnval=== "=" && op!=="")
    {
        evaluation();
    }
    else if(btnval=== "AC")
    {
        op="";
    }
    else if(btnval=== "DE")
    {
        op=op.toString().slice(0,-1);
    }
    else
    {
        if(op==="" && ch.includes(btnval)) 
        return;

            op+=btnval;
        
    }

    pre=btnval;
    
    inp.value=op;
    }

}

btn.forEach((button)=>{
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});
