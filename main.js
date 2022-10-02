const dayOfWeekEnum = ["日", "月", "火", "水", "木", "金", "土"];

$("#btn-ok").on("click", function()
{
  const selectedYear = $("[name=year]").val();
  const selectedMonth = $("[name=month]").val();

  const lastDayNumber = new Date(selectedYear, selectedMonth, 0).getDate();

  const dayTexts = [...Array(lastDayNumber)].map((_, index) => index + 1).map(day =>
    {
      const dayOfWeek = dayOfWeekEnum[new Date(selectedYear, selectedMonth - 1, day).getDay()];
      const result = `${day} ${dayOfWeek}\n昼: \n夜: \n`;
      return result;
    });

  $("#result").text(dayTexts.join("\n"));
});