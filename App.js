import React from "react";
import { View, StyleSheet } from "react-native";
import Todo from "./Components/Todo";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Todo />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 64,
		justifyContent: "center",
	},
});

export default App;
