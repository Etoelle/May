const taskName = document.getElementById("taskName");
const description = document.getElementById("taskDescription");
const beginDate = document.getElementById("taskBeginDate");
const limitDate = document.getElementById("taskLimitDate");
const workerName = document.getElementById("taskWorkerName");
const urgent = document.getElementById("taskUrgent");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");

const taskNameValue = taskName.value;
const descriptionValue = description.value;
const beginDateValue = beginDate.value;
const limitDateValue = limitDate.value;
const workerNameValue = workerName.value;
const urgentValue = urgent.checked;

const tasksData = [
  taskNameValue,
  descriptionValue,
  beginDateValue,
  limitDateValue,
  workerNameValue,
  urgentValue,
];

// ! Fonction validation
function submitForm(e) {
  e.preventDefault();
  const tasksList = [
    taskNameValue,
    workerNameValue,
    beginDateValue,
    limitDateValue,
  ];

  console.log(tasksList);
  alert(
    `Voulez-vous attribuer la tâche "${taskNameValue}" à ${workerNameValue} avec comme limite de délai le ${limitDateValue} ?`
  );
}

// ! Boutons
submitBtn.addEventListener("click", () => {
  submitForm();
});
