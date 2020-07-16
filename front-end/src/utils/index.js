import { get } from "lodash/fp";

import RESP_CODE from "constants/resp-code";

export const formatAMPM = () => {
  var d = new Date(),
    months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  return (
    days[d.getDay() - 1] +
    ", " +
    d.getDate() +
    "/" +
    months[d.getMonth()] +
    "/" +
    d.getFullYear()
  );
};

export const getMsgByRespCode = (code) => {
  return get(code, RESP_CODE);
};

export const doFunctionWithEnter = (event, func) =>
  typeof event === "object" &&
  event.key === "Enter" &&
  typeof func === "function" &&
  func();