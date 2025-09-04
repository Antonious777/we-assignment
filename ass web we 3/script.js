// ========================
// Animate text: remove letters, then bring them back
// ========================
const textEl = document.getElementById("animateText");
const originalText = textEl.textContent;
let i = originalText.length;

// Step 1: delete letters one by one
function deleteLetters() {
  if (i >= 0) {
    textEl.textContent = originalText.substring(0, i);
    i--;
    setTimeout(deleteLetters, 100); // speed
  } else {
    i = 0;
    setTimeout(addLetters, 300); // wait before typing back
  }
}

// Step 2: add letters one by one
function addLetters() {
  if (i <= originalText.length) {
    textEl.textContent = originalText.substring(0, i);
    i++;
    setTimeout(addLetters, 100);
  } else {
    setTimeout(deleteLetters, 1000); // repeat loop
  }
}

// Start animation
deleteLetters();


// ========================
// Input behavior (shrink placeholder + validation)
// ========================
const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");

inputs.forEach(input => {
  // shrink placeholder effect
  input.addEventListener("focus", () => {
    input.classList.add("shrink");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.classList.remove("shrink");
    }

    // check validity on blur
    if (!input.checkValidity()) {
      input.reportValidity();  
      // ❌ removed .focus() (no jumpy UX)
    }
  });
});
