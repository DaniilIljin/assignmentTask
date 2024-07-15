import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalStore } from "src/store";
import { Card,Checkbox } from "react-native-paper";

const TaskList = () => {
    const { tasks } = useGlobalStore();
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            {tasks.map((task) => (
                <Card style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{task.name}</Text>
                        <Checkbox status={task.isCompleted ? "checked" : "unchecked"} onPress={() => setChecked(!checked)} />
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
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 16,
    },
});
