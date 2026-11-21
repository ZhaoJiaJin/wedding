const form = document.forms.namedItem("wedding-rsvp");
const attendingDetails = document.querySelector("#attending-details");
const guestCount = document.querySelector("#guest-count");
const roomCount = document.querySelector("#room-count");
const comments = document.querySelector("#comments");

function updateQuestions() {
  const attending = form.elements.attendance.value === "accept";
  const bringingGuests = attending && guestCount.valueAsNumber > 1;

  attendingDetails.hidden = !attending;
  attendingDetails.disabled = !attending;
  guestCount.required = attending;
  roomCount.required = attending;
  comments.required = bringingGuests;
}

form.addEventListener("change", updateQuestions);
guestCount.addEventListener("input", updateQuestions);
window.addEventListener("pageshow", updateQuestions);
updateQuestions();
