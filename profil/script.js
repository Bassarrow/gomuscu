
// Récupérer l'image et le nom depuis localStorage
document.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.getElementById("profilePic");
  const displayName = document.getElementById("displayName");
  const savedBanner = localStorage.getItem("userBanner");
  const savedPhoto = localStorage.getItem("userPhoto");
  const savedUsername = localStorage.getItem("username");

  if (savedPhoto) {
    profilePic.src = savedPhoto;
  }
  if (savedBanner) {
    currentBanner.src = savedBanner;
  }
  if (savedUsername) {
    displayName.textContent = savedUsername;
  }
});