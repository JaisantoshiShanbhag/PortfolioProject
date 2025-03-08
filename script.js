
    function sendMail(){
        let parms={
          name : document.getElementById("name").value,
          email : document.getElementById("email").value,
         mobile : document.getElementById("mobile").value,
         subject : document.getElementById("subject").value,
         message : document.getElementById("message").value,
        };
        
        const serviceID = "service_ctb30if";
    const templateID = "template_tjy3bzp";
    emailjs.send("service_ctb30if", "template_tjy3bzp", Params)
    .then(
        res=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("mobile").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your Message sent successfully!")
        }
    )
.catch(err=>console.log(err));

    }
    


