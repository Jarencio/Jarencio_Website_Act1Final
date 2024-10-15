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

var availableLarawan = [...larawan]; // create a copy of the original array
var currentIndex = 0;
var monsterImages = []; // keep track of the images that have been added
var killedMonsters = []; // track monsters that have been killed

function add() {
  const randomIndex = Math.floor(Math.random() * availableLarawan.length);
  const randomLarawan = availableLarawan[randomIndex];
  
  // remove the selected element from the available array
  availableLarawan.splice(randomIndex, 1);
  
  const div = document.createElement("div");
  div.className = "monster-profile";
  
  const container = document.createElement("div");
  container.className = "monster-container-inner";
  
  const img = document.createElement("img");
  img.src = randomLarawan;
  img.className = "img-fluid";
  img.alt = "monster-image";

  monsterImages.push(randomLarawan); // keep track of the image
  
  const name = document.createElement("h6");
  name.style.marginLeft = "10px";
  name.textContent = document.getElementById("monster-name").value;
  
  container.appendChild(img);
  container.appendChild(name);
  
  div.appendChild(container);
  
  document.getElementById("monster-container").appendChild(div);
  
  // if all elements have been used, reset the available array
  if (availableLarawan.length === 0) {
    availableLarawan = [...larawan]; // reset the available array
  }
}
function pick() {
  $("#ew").remove();
  const names = document.getElementById("monster-container").children;
  const weapons = [
    "using a knife", "using a bomb",  "using a gun",  "using a poison",  "her hands", "by throwing eggs", "by horrible singing", "using a flamethrower",  "using a flying tsinelas", "using a fire",  "using a rubber chicken",  "using a frying pan", 
     "by deadly stare","using a boomerang", "using a cactus" ]; 
      const weaponIndex = Math.floor(Math.random() * weapons.length); // Random weapon selector
  
  // If there's only one option left, show the remaining monster and disable further picking
  if (names.length - killedMonsters.length === 1) {
    const remainingMonsterIndex = monsterImages.findIndex((_, idx) => !killedMonsters.includes(idx));
    
    if (remainingMonsterIndex !== -1) {
      const remainingMonsterImage = monsterImages[remainingMonsterIndex];
      
      // Set both Killer and Killed names to the remaining monster's name
      document.getElementById("Killer-name").value = names[remainingMonsterIndex].textContent;
      document.getElementById("Killed-name").value = names[remainingMonsterIndex].textContent;
      
      // Display only one image for the remaining monster
      const winnerDiv = document.createElement("div");
      winnerDiv.id = "ew";
      
      const winnerMonsterImage = document.createElement("img");
      winnerMonsterImage.src = remainingMonsterImage;
      winnerMonsterImage.alt = "...";
      winnerMonsterImage.classList.add("img-thumbnail");
      
      winnerDiv.appendChild(winnerMonsterImage);
      document.getElementById("winner").appendChild(winnerDiv);
      
      // Display the winning text message
      const winningText = document.createElement("h6");
      winningText.textContent = `${names[remainingMonsterIndex].textContent} has survived and won the death race!!! Either add a new doll or restart this page to continue playing!`;
      winnerDiv.appendChild(winningText);
    
      return; // Stop further execution
    }
  }
  
  let KillerIndex, KilledIndex;

  // Find a killer who is not already killed
  do {
    KillerIndex = Math.floor(Math.random() * names.length);
  } while (killedMonsters.includes(KillerIndex));

  // Find a killed monster who is not already killed and is not the killer
  do {
    KilledIndex = Math.floor(Math.random() * names.length);
  } while (KilledIndex === KillerIndex || killedMonsters.includes(KilledIndex));

  const killedImage = monsterImages[KilledIndex];
  
  let intervalRuns = 0;
  
  const interval1 = setInterval(() => {
    console.log(intervalRuns);
    
    if (intervalRuns === 50) {
      document.getElementById("Killer-name").classList.add("bg-warning");
      document.getElementById("Killed-name").classList.add("bg-warning");
      document.getElementById("Killer-name").classList.add("killer-input");
      document.getElementById("Killed-name").classList.add("killed-input");

      // Grayscale the killed image
      const killedImgElement = document.querySelector(`img[src="${killedImage}"]`);
      killedImgElement.style.filter = 'grayscale(100%)';
  
      // Remove the killed image from the available array
      const index = availableLarawan.indexOf(killedImage);
      if (index !== -1) {
        availableLarawan.splice(index, 1);
      }

      // Add the killed monster to the killedMonsters array
      killedMonsters.push(KilledIndex);
      
      const winnerDiv = document.createElement("div");
      winnerDiv.id = "ew";
      
      // Create two separate img elements
      const winnerMonsterImage1 = document.createElement("img");
      winnerMonsterImage1.src = monsterImages[KillerIndex];
      winnerMonsterImage1.alt = "...";
      winnerMonsterImage1.classList.add("img-thumbnail");

      const winnerMonsterImage2 = document.createElement("img");
      winnerMonsterImage2.src = monsterImages[KilledIndex];
      winnerMonsterImage2.alt = "...";
      winnerMonsterImage2.style.filter = 'grayscale(100%)';
      winnerMonsterImage2.classList.add("img-thumbnail", "killed-image");

      // Append the img elements to the winnerDiv
      winnerDiv.appendChild(winnerMonsterImage1);
      winnerDiv.appendChild(winnerMonsterImage2);

      document.getElementById("winner").appendChild(winnerDiv);
  
      document.getElementById("Killer-name").value = names[KillerIndex].textContent;
      document.getElementById("Killed-name").value = names[KilledIndex].textContent;

      // Add the kill text below the images
      const killText = document.createElement("h6");
      killText.textContent = `${names[KillerIndex].textContent} has killed ${names[KilledIndex].textContent} ${weapons[weaponIndex]}`;
      winnerDiv.appendChild(killText);

      clearInterval(interval1);
    } else {
      // Update the displayed winner name
      document.getElementById("Killer-name").value = names[Math.floor(Math.random() * names.length)].textContent;
      document.getElementById("Killed-name").value = names[Math.floor(Math.random() * names.length)].textContent;
    }
    
    intervalRuns++;
  }, 50);
}
