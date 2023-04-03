import "./App.css";
import { useEffect, useState } from "react";
import { SelectForm } from "./SelectForm";

function App() {
  const DAY_OF_WEEK_ENUM = ["日", "月", "火", "水", "木", "金", "土"];
  const YEAR_RANGE = 3;
  const years = [...Array(YEAR_RANGE)].map((_, index) => new Date().getFullYear() + index);
  const months = [...Array(12)].map((_, i) => i + 1);

  const [text, setText] = useState("");
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const lastDayNumber = new Date(selectedYear, selectedMonth, 0).getDate();

    setIsCopied(false);

    setText(
      [...Array(lastDayNumber)]
        .map((_, index) => index + 1)
        .map((day) => {
          const dayOfWeek = DAY_OF_WEEK_ENUM[new Date(selectedYear, selectedMonth - 1, day).getDay()];
          return `${day} ${dayOfWeek} \n昼: \n夜: \n`;
        })
        .join("\n")
    );
  }, [selectedYear, selectedMonth]);

  const copy = async () => {
    await global.navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <div className="App">
      <div className="form">
        <SelectForm name={"year"} items={years} unit={"年"} initialValue={selectedYear} onChange={setSelectedYear}></SelectForm>
        <SelectForm name={"month"} items={months} unit={"月"} initialValue={selectedMonth} onChange={setSelectedMonth}></SelectForm>
        <button className="button" onClick={copy}>
          copy
        </button>
      </div>
      {isCopied && <p className="status">コピーされました</p>}
      <textarea name="text" id="text" cols="30" rows="10" className="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  );
}

export default App;
