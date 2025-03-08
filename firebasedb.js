// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDChzanDxk4HC0Y_5c8x3dSEo2UYOTa4Pg",
    authDomain: "portfolio-6a52b.firebaseapp.com",
    databaseURL: "https://portfolio-6a52b-default-rtdb.firebaseio.com",
    projectId: "portfolio-6a52b",
    storageBucket: "portfolio-6a52b.firebasestorage.app",
    messagingSenderId: "287149729759",
    appId: "1:287149729759:web:a81dd56c8b9c7e8925066a"
  };
//initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref("portfolio");

  document.getElementById("contactform").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var mobile = getElementVal("mobile");
    var subject = getElementVal("subject");
    var msgContent = getElementVal("message");
  
    saveMessages(name, emailid, mobile,subject,msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid,mobile,subject, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      mobile: mobile,
      subject: subject,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };