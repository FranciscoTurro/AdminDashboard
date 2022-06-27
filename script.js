const notis = document.getElementById("notis");
let tracker;
notis.addEventListener("click", () => {
  if (tracker == "t") {
    notis.src = "images/notificationsON.png";
    tracker = "asd"; //logic is absolute dogshit on this but i couldnt get it to work by doing if (notis.src == ....) so it stays like this
  } else {
    notis.src = "images/notificationsOFF.png";
    tracker = "t";
  }
});
