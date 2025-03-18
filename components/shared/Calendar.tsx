import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import {
  Calendar as CalendarC,
  LocaleConfig,
  CalendarList,
  Agenda,
} from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};

LocaleConfig.locales["en"] = {
  monthNames: [
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
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  today: "Today",
};

LocaleConfig.defaultLocale = "en";

const Calendar = () => {
  const [selected, setSelected] = React.useState("");
  // const [marketDays, setMarketDays] = React.useState({});
  const [prevMonth, setPrevMonth] = React.useState(false);
  const [nextMonth, setNextMonth] = React.useState(true);
  const selectedDayBackgroundColor = (date: Date) => {
    if (
      date.getMonth() &&
      date.getFullYear() === new Date().getMonth() &&
      new Date().getFullYear()
    ) {
      return "#20BD00";
    } else {
      return "#8FDE80";
    }
  };

  const daysSchedule = ["2025-03-15", "2025-02-28", "2025-04-05"];

  const marketDays = daysSchedule.reduce((acc, day) => {
    return {
      ...acc,
      [day]: {
        selected: true,
        selectedColor: selectedDayBackgroundColor(new Date(day)),
        //disableTouchEvent: true,
      },
    };
  }, {});
  console.log(marketDays);

  /* const marketDays = {
    "2025-03-15": {
      selected: true,
      selectedColor: selectedDayBackgroundColor(new Date("2025-02-28")),
      //disableTouchEvent: true,
    },
    "2025-02-28": {
      selected: true,
      selectedColor: selectedDayBackgroundColor(new Date("2025-02-28")),
      //disableTouchEvent: true,
    },
    "2025-04-05": {
      selected: true,
      selectedColor: selectedDayBackgroundColor(new Date("2025-02-28")),
      //disableTouchEvent: true,
    },
  }; */

  console.log(new Date().getMonth(), new Date().getFullYear());
  const selectedDate = (date: any) => {
    setSelected(date.dateString);
    console.log(date);
  };
  const calendarRef = React.useRef<typeof CalendarC>(null);

  return (
    <View style={{ borderWidth: 1, borderColor: "black", width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: "gray",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity onPress={() => calendarRef.current?.call}>
          <Text style={{ fontSize: 20 }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Calendar</Text>
        <TouchableOpacity onPress={() => setNextMonth(!nextMonth)}>
          <Text style={{ fontSize: 20 }}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <CalendarC
        theme={{
          backgroundColor: "#FFFFFF",
          calendarBackground: "#FFFFFF",
          textSectionTitleColor: "#fff", //day of moth (sun,mon,etc...)
          selectedDayBackgroundColor: "#20BD00",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#20BD00",
          dayTextColor: "#000",
          textDisabledColor: "#636363",
          monthTextColor: "#fff",
          //indicatorColor: "blue",
          //arrowColor: "orange",//icons of next and previous month
          //monthTextColor: "blue",
          textDayFontFamily: "inter",
          textMonthFontFamily: "inter",
          //textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 14,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
          arrowColor: "#118B6F",
          arrowStyle: {
            //paddingHorizontal: 10,
            //paddingVertical: 10,
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderColor: "#DBDBDB",
            borderRadius: 99,
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            aspectRatio: 1,
          },
        }}
        headerStyle={{
          backgroundColor: "#062820",
          borderBottomWidth: 10,
        }}
        // Initially visible month. Default = Date()
        //current={"2021-05-01"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        //minDate={"2021-05-10"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        //maxDate={"2021-05-30"}
        // Handler which gets executed
        onDayPress={(day: any) => {
          selectedDate(day);
          /* setMarketDays({
            ...marketDays,
            [day.dateString]: {
              selected: true,
              disableTouchEvent: true,
            },
          }); */
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        //monthFormat={"yyyy MM"}

        // Do not show days of other months in month page. Default = false
        //hideExtraDays={true}

        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        //firstDay={1}

        // Hide day names. Default = false
        //hideDayNames={true}
        // Show week numbers to the left. Default = false
        //showWeekNumbers={true}

        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        //onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        //onPressArrowRight={(addMonth: () => void) => addMonth()}
        // Disable left arrow. Default = false
        //disableArrowLeft={true}
        // Disable right arrow. Default = false
        // disableArrowRight={true}

        // Collection of dates that have to be colored in a special way. Default = {}
        markedDates={{
          ...marketDays,
          "2025-03-15": {
            selected: true,
            //disableTouchEvent: true,
          },
          "2025-02-28": {
            selected: true,
            selectedColor: selectedDayBackgroundColor(new Date("2025-02-28")),
            //disableTouchEvent: true,
          },
          [selected]: {
            selected: true,
            disableTouchEvent: true,

            //selectedDotColor: "#20BD00",
          },
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        //markingType={"period"}
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: "#000",
          height: 350,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
      />
    </View>
  );
};

export default Calendar;
