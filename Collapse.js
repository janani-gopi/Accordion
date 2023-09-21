import React, { Component, useState } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import { FontAwesome } from "@expo/vector-icons";

//DATA
const CONTENT = [
  {
    title: "BFR Details",
    source: "FMS-Mobile",
    bfrno: 396759,
    dateandtime: "06/07/2023 10:12AM",
    status: "Onsite",
    assignedto: "FMS",
    subject: "AIRCON DUSTY @ GS , 19 CISCO GUARD POST NEAR BAY 605",
  },
  {
    title: "Equipment Faults Details",
    source: "FMS-Mobile",
    bfrno: 396759,
    dateandtime: "06/07/2023 10:12AM",
    status: "Onsite",
    assignedto: "FMS",
    subject: "AIRCON DUSTY @ GS , 19 CISCO GUARD POST NEAR BAY 605",
  },
];

export default function Collapse() {
  const [activeSections, setActivesections] = useState([]);

  const setSections = (sections) => {
    //sections has the index of the active section
    console.log(sections);
    setActivesections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section,i , isActive) => {
    return (
      // <Animatable.View
      //   duration={400}
      //   style={styles.collapseheader}
      // >
      <View style={styles.collapseheader}>
        <Text>{section.title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
          }}
          style={styles.btncontainer}
        >
          <FontAwesome name="edit" size={20} color="white" />
        </TouchableOpacity>
      </View>
      // {/* </Animatable.View> */}
    );
  };

  const renderContent = (section, i ,isActive) => {
    return (
      <Animatable.View animation={isActive ? "bounceIn" : "bounceOut"} easing={"ease-in-out"} duration={400}>
        <View style={styles.flexcontainer}>
          <View>
            <Text style={styles.title}>Source</Text>
            <Text style={styles.flexvalue}>{section.source}</Text>
          </View>
          <View>
            <Text style={styles.title}>BFR No</Text>
            <Text style={styles.flexvalue}>{section.bfrno}</Text>
          </View>
        </View>
        <View style={styles.flexcontainer}>
          <View>
            <Text style={styles.title}>Date & Time</Text>
            <Text style={styles.flexvalue}>{section.dateandtime}</Text>
          </View>
          <View>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.flexvalue}>{section.status}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Assigned to</Text>
          <Text style={styles.value}>{section.assignedto}</Text>
        </View>
        <View>
          <Text style={styles.title}>Subject</Text>
          <Text style={styles.value}>{section.subject}</Text>
        </View>
      </Animatable.View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        <Accordion
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          expandMultiple={false}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={600}
          onChange={setSections}
          easing={"easeInOut"}
          expandFromBottom={false}
          sectionContainerStyle={{ backgroundColor: "white" }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 1,
    padding: 15,
    width: "90%",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  collapseheader: {
    backgroundColor: "#f8e473",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexcontainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 6,
    marginBottom: 15,
  },
  title: {
    marginBottom: 5,
  },
  flexvalue: {
    backgroundColor: "#e5e5e5",
    padding: 8,
    borderRadius: 10,
    width: 145,
    fontSize: 13,
  },
  value: {
    backgroundColor: "#e5e5e5",
    padding: 8,
    borderRadius: 10,
    fontSize: 13,
    marginBottom: 15,
    width: 295,
  },
  btncontainer: {
    backgroundColor: "#ffc30b",
    padding: 5,
    borderRadius: 5,
  },
});
