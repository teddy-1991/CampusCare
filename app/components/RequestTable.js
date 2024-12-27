import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import axios from "axios";

const RequestTable = () => {
  const [requests, setRequests] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6758bdfa60576a194d11a492.mockapi.io/request"
      );
      setRequests(response.data); // Correctly set the state with response data
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
    clearData;
  };
  const clearData = async (id) => {
    try {
      const response = await axios.delete(
        `https://6758bdfa60576a194d11a492.mockapi.io/request/${id}`
      );
      if (response.status !== 200) {
        console.error(`Failed to delete item with id ${id}:`, response.status);
      } else {
        console.log(`Deleted item with id ${id}`);
      }

      setRequests([]);
      console.log("All specified items cleared successfully.");
    } catch (error) {
      console.error("Error clearing requests:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleResolve = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "Resolved" } : request
    );
    setRequests(updatedRequests);
    setTimeout(() => clearData(id), 5000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.typeOfRequest}</Text>
      <Text style={styles.cell}>{item.location}</Text>
      <Text style={styles.cell}>{item.time}</Text>
      <Text style={styles.cell}>{item.comments}</Text>
      <View style={styles.image}>
        <Image
          source={{ uri: item.attachment }}
          style={{ width: 50, height: 50, borderRadius: 5 }}
        />
      </View>
      <View style={styles.cell}>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            color: item.status === "Pending" ? "red" : "green",
          }}
        >
          {item.status}
        </Text>
        {item.status === "Pending" ? (
          <Pressable onPress={() => handleResolve(item.id)}>
            <Text style={styles.resolveText}>Resolve</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={requests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerCell}>Type</Text>
            <Text style={styles.headerCell}>Location</Text>
            <Text style={styles.headerCell}>Time</Text>
            <Text style={styles.headerCell}>Comments</Text>
            <Text style={styles.headerCell}>Image</Text>
            <Text style={styles.headerCell}>Status</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  image: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },
  resolveText: {
    color: "white",
    margin: "auto",
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: "green",
  },
});

export default RequestTable;
