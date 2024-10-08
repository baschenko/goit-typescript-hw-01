enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  const weekend: DayOfWeek[] = [DayOfWeek.Saturday, DayOfWeek.Sunday];
  return !weekend.includes(day);
};

console.log(isWeekend(DayOfWeek.Tuesday)); //true
console.log(isWeekend(DayOfWeek.Sunday)); //false
