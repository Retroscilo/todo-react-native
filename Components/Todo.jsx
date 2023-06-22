import React, { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet, Text } from "react-native";

const Todos = () => {
	const [todoText, setTodoText] = useState("");
	const [todos, setTodos] = useState([{ id: 43232, text: "Faire les courses" }]);

	const addTodo = () => {
		if (todoText.trim() !== "") {
			setTodos([...todos, { id: Date.now(), text: todoText }]);
			setTodoText("");
		}
	};

	const removeTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} value={todoText} onChangeText={setTodoText} placeholder="Ajouter une tâche" />
			<Button title="Ajouter" onPress={addTodo} />
			<FlatList
				data={todos}
				renderItem={({ item }) => <Todo removeTodo={removeTodo} item={item} />}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
};

const Todo = ({ item, removeTodo }) => {
	const [isFinished, setFinished] = useState(false);

	return (
		<View style={styles.todoItem}>
			<Text style={styles.text}>{item.text}</Text>
			<View style={styles.actions}>
				{!isFinished ? (
					<>
						<Button title="supprimer" onPress={() => removeTodo(item.id)}></Button>
						<Button title="terminer" onPress={() => setFinished(true)}></Button>
					</>
				) : (
					<>
						<Button title="GG" onPress={() => removeTodo(item.id)}></Button>
						<Button title="annuler" onPress={() => setFinished(false)}></Button>
					</>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 8,
		paddingHorizontal: 8,
	},
	todoItem: {
		backgroundColor: "#f2f2f2",
		padding: 16,
		marginBottom: 8,
		borderRadius: 4,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	actions: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 10,
		color: "white",
	},
	text: {
		width: "40%",
	},
	button: {
		backgroundColor: "#000000",
		color: "#ffffff",
	},
});

export default Todos;
