
const openButton = document.getElementById("openButton");
const invitation = document.getElementById("invitation");

// فتح الدعوة
openButton.addEventListener("click", function () {
  invitation.classList.add("is-open");
});

// العد التنازلي
const weddingDate = new Date("2026-11-26T19:00:00+02:00").getTime();

const countdown = document.getElementById("countdown");
const countdownMessage = document.getElementById("countdownMessage");

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  if (distance <= 0) {
    clearInterval(countdownTimer);

    countdown.style.display = "none";
    countdownMessage.textContent = "لقد حان اليوم المنتظر! ♡";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);

// 
const musicButton = document.getElementById("musicButton");
const weddingMusic = document.getElementById("weddingMusic");

musicButton.addEventListener("click", async function () {
  if (weddingMusic.paused) {
    try {
      await weddingMusic.play();
      musicButton.classList.add("is-playing");
      musicButton.setAttribute("aria-label", "إيقاف الموسيقى");
      musicButton.setAttribute("title", "إيقاف الموسيقى");
    } catch (error) {
      console.error("Music playback error:", error);
      alert("الأغنية مش قادرة تشتغل. اتأكدي من اتصال الإنترنت ورابط الأغنية.");
    }
  } else {
    weddingMusic.pause();
    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-label", "تشغيل الموسيقى");
    musicButton.setAttribute("title", "تشغيل الموسيقى");
  }
});

weddingMusic.addEventListener("ended", function () {
  musicButton.classList.remove("is-playing");
  musicButton.setAttribute("aria-label", "تشغيل الموسيقى");
  musicButton.setAttribute("title", "تشغيل الموسيقى");
});
