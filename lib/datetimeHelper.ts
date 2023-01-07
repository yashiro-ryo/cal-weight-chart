function getNextDay(year: number, month: number, day: number) {
  let date = {
    year: year,
    month: month,
    day: day,
  };
  if (month === 12) {
    if (day === 31) {
      date = {
        year: date.year + 1,
        month: 1,
        day: 1,
      };
    } else {
      date = {
        year: date.year,
        month: 12,
        day: date.day + 1,
      };
    }
  } else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10
  ) {
    if (day === 31) {
      date = {
        year: date.year,
        month: date.month + 1,
        day: 1,
      };
    } else {
      date = {
        year: date.year,
        month: date.month,
        day: date.day + 1,
      };
    }
  } else if (month === 2) {
    if (day === 28) {
      date = {
        year: date.year,
        month: date.month + 1,
        day: 1,
      };
    } else {
      date = {
        year: date.year,
        month: date.month,
        day: date.day + 1,
      };
    }
  } else {
    if (day === 30) {
      date = {
        year: date.year,
        month: date.month + 1,
        day: 1,
      };
    } else {
      date = {
        year: date.year,
        month: date.month,
        day: date.day + 1,
      };
    }
  }
  return date;
}

function getPrevDay(year: number, month: number, day: number) {
  let date = {
    year: year,
    month: month,
    day: day,
  };
  if (month === 1) {
    if (day === 1) {
      date = {
        year: year - 1,
        month: 12,
        day: 31,
      };
    } else {
      date = {
        year: year,
        month: month,
        day: day - 1,
      };
    }
  } else if (month === 3) {
    if (day === 1) {
      date = {
        year: year,
        month: 2,
        day: 28,
      };
    } else {
      date = {
        year: year,
        month: month,
        day: day - 1,
      };
    }
  } else if (
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 8 ||
    month === 9 ||
    month === 11
  ) {
    if (day === 1) {
      date = {
        year: year,
        month: month - 1,
        day: 31,
      };
    } else {
      date = {
        year: year,
        month: month,
        day: day - 1,
      };
    }
  } else {
    if (day === 1) {
      date = {
        year: year,
        month: month - 1,
        day: 30,
      };
    } else {
      date = {
        year: year,
        month: month,
        day: day - 1,
      };
    }
  }
  return date;
}

export default {
  getNextDay,
  getPrevDay,
} as const;
