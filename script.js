

var larawan = [
  "Character_Images/Bea NEath.png",
  "Character_Images/Dawn.png",
  "Character_Images/Elisa.png",
  "Character_Images/Kitty.png",
  "Character_Images/Maggot.png",
  "Character_Images/Orchid.png",
  "Character_Images/Orchid_Twin.png",
  "Character_Images/Mildread.png",
  "Character_Images/Frozen Charlotte.png",
  "Character_Images/Camilla.png",
  "Character_Images/Ava.png",
  "Character_Images/Toxic_Molty.png"
];

var i = 0;
function add() {
  const div = document.createElement("div");
  div.className = "monster-profile";
  
  const container = document.createElement("div");
  container.className = "monster-container-inner";
  
  const img = document.createElement("img");
  img.src = larawan[i];
  img.className = "img-fluid";
  img.alt = "monster-image";

  
  const name = document.createElement("h6");
  name.style.marginLeft = "10px";
  name.textContent = document.getElementById("monster-name").value;
  
  container.appendChild(img);
  container.appendChild(name);
  
  div.appendChild(container);
  
  document.getElementById("monster-container").appendChild(div);
  
  i == larawan.length - 1 ? (i = 0) : i++;
}

function pick() {
    $("#ew").remove();
    const names = document.getElementById("monster-container").children;
    const selectedIndex = Math.floor(Math.random() * names.length);
    let intervalRuns = 0;
    
    if (selectedIndex > larawan.length){
      pic = selectedIndex - 7
    } else {
      pic = selectedIndex
    }

    const interval1 = setInterval(() => {
      console.log(intervalRuns);
      
      if (intervalRuns === 50) {
        document.getElementById("winner-name").classList.add("bg-warning");
        
        const winnerDiv = document.createElement("div");
        winnerDiv.id = "ew";
        
        const winnerMonsterImage = `<img src="${larawan[pic]}" alt="..." class="img-thumbnail" ">`;
        const winnerMonsterImages = `<img src="${larawan[pic]}" alt="..." class="img-thumbnail" ">`;

        winnerDiv.innerHTML = winnerMonsterImage;

        document.getElementById("winner").appendChild(winnerDiv);
  
        document.getElementById("winner-name").value = names[selectedIndex].textContent;
        
        clearInterval(interval1);
      } else {
        // Update the displayed winner name
        document.getElementById("winner-name").value = names[Math.floor(Math.random() * names.length)].textContent;
      }
      
      intervalRuns++;
    }, 50);
  }
  