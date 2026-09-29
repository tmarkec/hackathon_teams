
const form = document.getElementById("unlockForm");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const teams = document.getElementById("teams");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const answer = answerInput.value.trim().toLowerCase();

  if (answer === "marko") {
    feedback.textContent =
      "✅ Correct answer. A true professional!";
    feedback.style.color = "#7bed9f";

    teams.hidden = false;
    form.hidden = true;

    teams.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    feedback.textContent =
      "❌ Incorrect! Please consult your facilitator. 😂";
    feedback.style.color = "#ff7979";

    answerInput.value = "";
    answerInput.focus();
  }
});