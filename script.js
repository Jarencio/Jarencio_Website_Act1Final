document.addEventListener("contextmenu", (event) => event.preventDefault());
// var larawan = ["https://banner2.cleanpng.com/20180619/uox/kisspng-my-singing-monsters-clip-art-singing-child-5b28eec8ad5b41.8535842215294092247101.jpg",
//                 "https://img2.pngio.com/blue-monster-png-hd-cute-monster-clipart-free-transparent-png-cute-cartoon-monsters-png-840_512.png",
//                 "https://thumbs.dreamstime.com/b/modern-cute-monster-character-cartoon-mascot-clipart-vector-illustration-modern-cute-monster-character-cartoon-mascot-clipart-169885914.jpg",
//                 "https://www.clipartkey.com/mpngs/m/235-2355857_baby-child-monster-cartoon-cute-girl-people-.png",
//                 "https://www.pinclipart.com/picdir/middle/53-531569_cookie-monster-cute-cookies-image-by-jazygirl-stop.png",
//                 "https://st4.depositphotos.com/38459756/39410/v/950/depositphotos_394104742-stock-illustration-cartoon-cute-blue-monster-suitable.jpg"];

// var larawan = [
//   "https://drive.google.com/file/d/1vJFLx7eQKbBLyidPX4BMnMFGEDJvpVDH/view?usp=sharing",
//   "Mike2.webp",
//   "Sully_Monsters_University-removebg-preview.png",
// ];

var larawan = [
  "Character_Images/Bea NEath.png",
  "Character_Images/Dawn.png",
  "Character_Images/Elisa.png",
  "Character_Images/Kitty.png",
  "Character_Images/Maggot.png",
  "Character_Images/Orchid.png",
  "Character_Images/Toxic_Molty.png"
];

var i = 0;
function add() {
  const div = document.createElement("div");
  div.className = "monster-profile";
  div.innerHTML = `<img src="${
    larawan[i]
  }" class="img-fluid" alt="monster-image" style="width: 110px; height: 150px;"><h6 style="margin-left: 10px;">${
    document.getElementById("monster-name").value
  }</h6>`;
  document.getElementById("monster-container").appendChild(div);
  i == larawan.length - 1 ? (i = 0) : i++;
}

function pick() {
    $("#ew").remove();
    const names = document.getElementById("monster-container").children;
    const selectedIndex = Math.floor(Math.random() * names.length);
    let intervalRuns = 0;
  
    const interval1 = setInterval(() => {
      console.log(intervalRuns);
      
      if (intervalRuns === 50) {
        document.getElementById("winner-name").classList.add("bg-warning");
        
        const winnerDiv = document.createElement("div");
        winnerDiv.id = "ew";
        
        // Create an image for the selected monster
        const winnerMonsterImage = `<img src="${larawan[selectedIndex]}" alt="..." class="img-thumbnail" style="width: 300px; height: 300px;">`;
        winnerDiv.innerHTML = winnerMonsterImage;
        document.getElementById("winner").appendChild(winnerDiv);
  
        // Set the winner name
        document.getElementById("winner-name").value = names[selectedIndex].textContent;
        
        clearInterval(interval1);
      } else {
        // Update the displayed winner name
        document.getElementById("winner-name").value = names[Math.floor(Math.random() * names.length)].textContent;
      }
      
      intervalRuns++;
    }, 100);
  }
  