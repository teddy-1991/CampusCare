import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

export default function SubmitRequest() {
  const [typeOfRequest, setTypeOfRequest] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");
  const [attachment, setAttachment] = useState(""); // URL 입력 필드
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const requestData = {
      typeOfRequest,
      location,
      time,
      comments,
      status: "Pending",
      attachment, // attachment에 직접 URL 저장
    };

    try {
      const response = await axios.post(
        "https://6758bdfa60576a194d11a492.mockapi.io/request",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Request submitted successfully:", response.data);
      navigation.navigate("studentHome");
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  const handleCancel = () => {
    navigation.navigate("studentHome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancel} onPress={handleCancel}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>Request</Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.send}>Send</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Type of Request</Text>
        <Picker
          selectedValue={typeOfRequest}
          style={styles.picker}
          onValueChange={(itemValue) => setTypeOfRequest(itemValue)}
        >
          <Picker.Item label="Select Request" value="" />
          <Picker.Item label="Clean" value="Clean" />
          <Picker.Item label="Fill up" value="Fill_up" />
          <Picker.Item label="Broken" value="Broken" />
        </Picker>

        <Text style={styles.label}>Location</Text>
        <Picker
          selectedValue={location}
          style={styles.picker}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Select Building" value="" />
          <Picker.Item label="Aldred Centre" value="Aldred Centre" />
          <Picker.Item
            label="Begin Tower Residence"
            value="Begin Tower Residence"
          />
          <Picker.Item label="Heritage Hall" value="Heritage Hall" />
          <Picker.Item
            label="Senator Burns Building"
            value="Senator Burns Building"
          />
          <Picker.Item label="Stan Grad Centre" value="Stan Grad Centre" />
        </Picker>

        <Text style={styles.label}>Time</Text>
        <Picker
          selectedValue={time}
          style={styles.picker}
          onValueChange={(itemValue) => setTime(itemValue)}
        >
          <Picker.Item label="Select Time" value="" />
          <Picker.Item label="Morning" value="Morning" />
          <Picker.Item label="Afternoon" value="Afternoon" />
          <Picker.Item label="Evening" value="Evening" />
        </Picker>

        <Text style={styles.label}>Comments</Text>
        <TextInput
          style={styles.textArea}
          value={comments}
          onChangeText={setComments}
          placeholder="Explain a situation"
          multiline
        />

        <Text style={styles.label}>Attachment URL</Text>
        <TextInput
          style={styles.input}
          value={attachment}
          onChangeText={setAttachment}
          placeholder="Enter image URL"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cancel: {
    color: "red",
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#311c8b",
  },
  send: {
    color: "#311c8b",
    fontSize: 18,
  },
  form: {
    backgroundColor: "#FFF8DC",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 12,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 12,
  },
  textArea: {
    backgroundColor: "white",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 12,
  },
});
