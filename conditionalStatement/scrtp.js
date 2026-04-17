// Unique Conditional Program

let mood = "tired";   // try: happy, sad, angry, tired
let time = 22;        // 24-hour format (0–23)

if (mood === "happy" && time < 18) {
  console.log("Great! Go out and enjoy your day 😄");
} 
else if (mood === "happy" && time >= 18) {
  console.log("Nice! Relax and enjoy your evening 🌙");
} 
else if (mood === "sad") {
  console.log("Watch something funny or talk to a friend ❤️");
} 
else if (mood === "angry") {
  console.log("Take a deep breath and calm down 🧘");
} 
else if (mood === "tired" && time >= 21) {
  console.log("You should sleep 😴");
} 
else if (mood === "tired" && time < 21) {
  console.log("Take a short break ☕");
} 
else {
  console.log("Stay positive 👍");
}


