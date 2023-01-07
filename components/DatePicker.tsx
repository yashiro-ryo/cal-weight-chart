import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import datetimeHelper from "../lib/datetimeHelper";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function DatePicker() {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const setDate = (year: number, month: number, day: number) => {
    setYear(year);
    setMonth(month);
    setDay(day);
  };

  useEffect(() => {
    const date = new Date();
    setDate(date.getFullYear(), date.getMonth() + 1, date.getDay() + 1);
  }, []);

  const getNextDay = () => {
    const date = datetimeHelper.getNextDay(year, month, day);
    setDate(date.year, date.month, date.day);
  };

  const getPrevDay = () => {
    const date = datetimeHelper.getPrevDay(year, month, day);
    setDate(date.year, date.month, date.day);
  };

  return (
    <ButtonWrapper>
      <Button variant="light" onClick={() => getPrevDay()}>
        <GrFormPrevious />
      </Button>
      <Button variant="light">
        {year}年{month}月{day}日
      </Button>
      <Button variant="light" onClick={() => getNextDay()}>
        <GrFormNext />
      </Button>
    </ButtonWrapper>
  );
}
