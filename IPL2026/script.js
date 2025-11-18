const iplTeams = [
  { short: "CSK", full: "Chennai Super Kings", captain: "Ruturaj Gaikwad", mainBg: "#FDE047", secondaryBg: "#FACC15", image: "csk.jpg" },
  { short: "MI", full: "Mumbai Indians", captain: "Hardik Pandya", mainBg: "#0038A8", secondaryBg: "#00A3FF", image: "MI.png" },
  { short: "RCB", full: "Royal Challengers Bengaluru", captain: "Rajat Patidar", mainBg: "#D40000", secondaryBg: "#2A0909", image: "RCB.jpg" },
  { short: "KKR", full: "Kolkata Knight Riders", captain: "Ajinkya Rahane", mainBg: "#3B0A45", secondaryBg: "#D4AF37", image: "kkr.jpg" },
  { short: "RR", full: "Rajasthan Royals", captain: "Sanju Samson", mainBg: "#E5388B", secondaryBg: "#1E3A8A", image: "RR.jpg" },
  { short: "SRH", full: "Sunrisers Hyderabad", captain: "Pat Cummins", mainBg: "#FF6A00", secondaryBg: "#8B0000", image: "SRH.jpg" },
  { short: "DC", full: "Delhi Capitals", captain: "Axar Patel", mainBg: "#0A1A7C", secondaryBg: "#E50914", image: "DC.jpg" },
  { short: "PBKS", full: "Punjab Kings", captain: "Shreyas Iyer", mainBg: "#E50914", secondaryBg: "#F5D67B", image: "PBKS.jpg" },
  { short: "GT", full: "Gujarat Titans", captain: "Shubman Gill", mainBg: "#001C30", secondaryBg: "#F5D67B", image: "GT.jpg" },
  { short: "LSG", full: "Lucknow Super Giants", captain: "Rishabh Pant", mainBg: "#1D4ED8", secondaryBg: "#34D399", image: "LSG.png" }
];

const box = document.querySelector('.box');
const button = document.querySelector('button');

button.addEventListener('click', function() {
 
    const randomIndex = Math.floor(Math.random() * iplTeams.length);
    const team = iplTeams[randomIndex];

    box.innerHTML = `
        <img src="${team.image}" alt="">
        <h1>${team.short}</h1>
        <h2>${team.full}</h2>
        <h3>${team.captain}</h3>
    `;

   
    box.style.background = team.mainBg;
    box.style.border = `4px solid ${team.secondaryBg}`;
});
