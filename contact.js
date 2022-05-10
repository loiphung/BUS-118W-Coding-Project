const firebaseConfig = {
    apiKey: "AIzaSyD41QQKo9dR16wAvN7Gy7OrNB_IHPpHgZc",
    authDomain: "contact-bc95b.firebaseapp.com",
    projectId: "contact-bc95b",
    databaseURL: "https://contact-bc95b-default-rtdb.firebaseio.com/", 
    storageBucket: "contact-bc95b.appspot.com",
    messagingSenderId: "446437034464",
    appId: "1:446437034464:web:56bdeb37938828a20b0385"
  };
   const app = firebase.initializeApp(firebaseConfig);
   const dbRef = firebase.database().ref();
   const detailsRef = dbRef.child('userdetails');
   detailsRef.on("child_added", function(snapshot, prevChildKey) { 
    var newPost = snapshot.val();
   });
   function send(){
     
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value; 
    var phone = document.getElementById("txt_phone").value;
    var subject = document.getElementById("txt_subject").value;
    var message = document.getElementById("txt_message").value; 
    
    detailsRef.push().set({
    name: name,
    email: email, 
    phone: phone,
    subject: subject,
    message: message, 
    });
   }