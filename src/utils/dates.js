const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getFormattedDate = date =>
  `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${
    date.getHours() > 12
      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
      : `${date.getHours()}:${date.getMinutes()} AM`
  }`;
export default getFormattedDate;
