import { Calendar } from "react-native-calendars";
import { View, Text } from "react-native";
import React from "react";
import PopupDialog, { DialogTitle } from "react-native-popup-dialog";

export default class calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDay: "1", selectedEvent: "default evenxtt" };
  }
  render() {
    return (
      <View style={{ paddingTop: 50, flex: 1 }}>
        <PopupDialog
          dialogTitle={<DialogTitle title="Contact Information" />}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
        >
          <View>
            <Text>Event: {this.state.selectedEvent}</Text>
            <Text>Day: {this.state.selectedDay}</Text>
            <Text>Time: 12pm</Text>
          </View>
        </PopupDialog>

        <Calendar
          // Initially visible month. Default = Date()
          current={"2019-01-15"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2016-05-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2020-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log("selected day", day);
            this.popupDialog.show();
            var ev = "what";
            if (day.day == 1) {
              ev =
                "Collecting Donations for the Arlington Welfare League of Arlington";
            } else if (day.day == 2) {
              ev = "No Events today";
            } else if (day.day == 3) {
              ev = "Monday Classes Meet";
            } else if (day.day == 4) {
              ev = "Internship Hours with Professor Pomeroy";
            } else if (day.day == 5) {
              ev = "When you Wish Upon a Fundraiser";
            } else if (day.day == 6) {
              ev = "No Events today";
            } else if (day.day == 7) {
              ev = "No Events today";
            } else if (day.day == 8) {
              ev = "Special Olympics";
            } else if (day.day == 9) {
              ev = "Community Potluck";
            } else if (day.day == 10) {
              ev = "Interfaith Forum";
            } else if (day.day == 11) {
              ev =
                "Club 8 featuring Grammy Award Winner Rudy Currence and open mic";
            } else if (day.day == 12) {
              ev = "School of Business Meet & Greet (First Year Students)";
            } else if (day.day == 13) {
              ev = "Tech Challenge";
            } else if (day.day == 14) {
              ev = "Marymount 5K and Remembrance Day";
            } else if (day.day == 15) {
              ev =
                "Collecting Donations for the Arlington Welfare League of Arlington";
            } else if (day.day == 16) {
              ev = "Cru Weekly Meetings";
            } else if (day.day == 17) {
              ev = "Mens Health- Know Your Nuts";
            } else if (day.day == 18) {
              ev = "No Events today";
            } else if (day.day == 19) {
              ev = "The Clothesline Project";
            } else if (day.day == 20) {
              ev = "No Events today";
            } else if (day.day == 21) {
              ev = "Marython";
            } else if (day.day == 22) {
              ev = "No Events today";
            } else if (day.day == 23) {
              ev = "No Events today";
            } else if (day.day == 24) {
              ev = "No Events today";
            } else if (day.day == 25) {
              ev = "Baseball vs Virginia Wesleyan";
            } else if (day.day == 26) {
              ev = "LGBTie Dye";
            } else if (day.day == 27) {
              ev = "Game Night";
            } else if (day.day == 28) {
              ev = "Mens and Womens Lacrosse CAC Tournament";
            } else if (day.day == 29) {
              ev = "No Events today";
            } else if (day.day == 30) {
              ev = "Cru Weekly Meetings";
            }

            this.setState({
              selectedDay: day.day,
              selectedEvent: ev
            });
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"MM yyyy"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
    );
  }
}
