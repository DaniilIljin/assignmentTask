import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, TextInput, Button, Title } from "react-native-paper";
import { useGlobalStore } from "src/store";

const CreateTask: React.FC = () => {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const navigation = useNavigation()

    const { addTask, selectedTask } = useGlobalStore();

    const handleCreateTask = () => {
        if (name.length > 0) {
            addTask({ name: name, description: description } as ITask);
            setName("")
            setDescription("")
            navigation.navigate("TaskList")
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Create a New Task</Title>
                    <TextInput label="Name" value={name} onChangeText={(text) => setName(text)} style={styles.input} />
                    <TextInput
                        label="Description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                    />
                    <Button mode="contained" onPress={handleCreateTask} style={styles.button}>
                        Create Task
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    card: {
        width: "90%",
        padding: 10,
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
});

export default CreateTask;
