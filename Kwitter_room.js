// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBunWxF014z8gjptDIvR5TmupXWR4cWZnA",
    authDomain: "kwitter-app-9569a.firebaseapp.com",
    databaseURL: "https://kwitter-app-9569a-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-9569a",
    storageBucket: "kwitter-app-9569a.appspot.com",
    messagingSenderId: "112725537511",
    appId: "1:112725537511:web:83e745ecbb19a7e16e6842"
  };
  
  function getData(){firebaseConfig.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML
Group_name=childkey;
//start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick-'redirectToRoomname(this.id)'>#"+Room_names+"</div><hr;>";
document.getElementById("output").innerHTML+=row;
//end code
  });}
  getData();


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function addRoom()
{
    room_name=document.getElementById("room_name").value;
firebaseConfig.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);

window.location ="kwitter_page.html";
}