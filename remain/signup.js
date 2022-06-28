
function Errormsg(msg,printmsg){
    document.getElementById(msg).innerHTML=printmsg;
}
function validateForm() {
    var jsonObj={};
    let x = document.forms["Form"]["Fname"].value;
    let y = document.forms["Form"]["Lname"].value;
    let z = document.forms["Form"]["Mname"].value;
    let a = document.forms["Form"]["mno"].value;
    let b = document.forms["Form"]["email"].value;
    if(x =="") {
      Errormsg("msg1","please enter firstname");
      Fname.focus();
        return false;
    }
    else{
      Errormsg("msg1","");

    //   jsonObj.push({firstname:x.value});
    }
   if(y =="") {
      Errormsg("msg2","please enter lastname");
      Lname.focus();
        return false;
    }  
    else{
      Errormsg("msg2","");
    }
    if(z =="") {
      Errormsg("msg3","please enter Middlename");
      Mname.focus();
      return false;
    }  
    else{
      Errormsg("msg3","");
    }
    if(a =="") {
      Errormsg("msg4","Enter 10-digit mobile");
      mno.focus(); 
      return false;
    }  
    else{
      Errormsg("msg4","");
    }
    if(b =="") {
      Errormsg("msg5","Email in abc@gmail.com form");
      email.focus();
        return false;
    }    
    else{
      Errormsg("msg5","");
    }
    jsonObj={firstname:x,
              lastname:y,
              middlename:z,
              phone:a,
              email:b
            }
    var jsonDup=JSON.stringify(jsonObj);
    document.write(jsonDup);
    localStorage.setItem("jsonDup",1);
// document.getElementById("para").innerHTML = JSON.stringify(jsonObj);

    // document.write(jsonObj);
}

  