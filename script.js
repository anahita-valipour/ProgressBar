const prevElem = document.querySelector("#prev");
const nextElem = document.querySelector("#next");
const formStep = document.querySelectorAll(".form-step");
const StepElem = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");
let currentChecked = 1;
nextElem.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > StepElem.length) {
    currentChecked = StepElem.length;
  }
  updateProgressStep();
});
prevElem.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateProgressStep();
});
// بروز رسانی مراحل
function updateProgressStep() {
  StepElem.forEach((step, index) => {
    if (index < currentChecked) {
      step.classList.add("checked");
    } else {
      step.classList.remove("checked");
    }
  });

  // بروز رسانی فرم
  formStep.forEach((form, index) => {
    if (index + 1 === currentChecked) {
      form.classList.add("form-step-active");
    } else {
      form.classList.remove("form-step-active");
    }
  });

  //   // بروز رسانی نوار پیشرفت
  const checkedNumber = document.querySelectorAll(".checked");
  progressEl.style.width =
    ((checkedNumber.length - 1) / (StepElem.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevElem.disabled = true;
  } else if (currentChecked === StepElem.length) {
    nextElem.disabled = true;
  } else {
    prevElem.disabled = false;
    nextElem.disabled = false;
  }
}