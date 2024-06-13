const d1 = new Date();

function setWeeks() {
  const w1 = document.getElementById("dateWeek1");
  const w2 = document.getElementById("dateWeek2");
  const w3 = document.getElementById("dateWeek3");
  const w4 = document.getElementById("dateWeek4");

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function formatDate(date) {
    return date.toLocaleDateString("fr-BE");
  }

  const weeks = [w1, w2, w3, w4];

  for (let i = 0; i < weeks.length; i++) {
    const startDate = addDays(d1, i * 7);
    const endDate = addDays(startDate, 6);
    weeks[i].textContent = `Du ${formatDate(startDate)} au ${formatDate(
      endDate
    )}`;

    if (i === weeks.length - 1) {
      lastDay = endDate;
    }
  }

  const dateCaption = document.getElementById("dateCaption");
  const firstDay = formatDate(d1);

  dateCaption.textContent = `Du ${firstDay} au ${formatDate(lastDay)}`;
}

setWeeks();
