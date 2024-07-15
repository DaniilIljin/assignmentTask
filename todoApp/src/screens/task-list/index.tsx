import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalStore } from "src/store";
import { Button, Card, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const TaskList = () => {
    const { tasks, updateSelectedTask } = useGlobalStore();
    const [checked, setChecked] = React.useState(false);
    const navigation = useNavigation()

    const handleUpdate = (task: ITask) => {
        updateSelectedTask(task);
        navigation.navigate("CreateTask")
    };

    return (
        <View style={styles.container}>
            {tasks.map((task) => (
                <Card style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{task.name}</Text>
                        <View style={styles.actionButtons}>
                            <Button icon="square-edit-outline" onPress={() => handleUpdate(task)} />
                            <Checkbox
                                status={task.isCompleted ? "checked" : "unchecked"}
                                onPress={() => setChecked(!checked)}
                            />
                        </View>
                    </View>
                </Card>
            ))}
        </View>
    );
};

export default TaskList;

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
        marginVertical: 2,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 16,
    },
    actionButtons: {
        flexDirection: "row",
        alignItems: "center",
    },
});
