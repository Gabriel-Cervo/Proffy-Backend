function convertHourToMinutes(time) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = minutes + hour * 60;

  return timeInMinutes;
}

module.exports = convertHourToMinutes;
