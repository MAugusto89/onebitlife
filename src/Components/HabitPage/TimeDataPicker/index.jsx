import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Text } from "react-native-paper";

export default function TimeDataPicker({
    frequency,
    dayNotification,
    timeNotification,
    setDayNotification,
    setTimeNotification,
}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("-");
    const [notificationDate, setNotificationDate] = useState();
    const [notificationTime, setNotificationTime] = useState();


    const onChange = (_, selectDate) => {
        const currentDate = selectDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        const notificationHour = tempDate.getHours().toString().padStart(2, "0");
        const notificationMin = tempDate.getMinutes().toString().padStart(2, "0");
        let dateNotification;

        if (frequency === "Semanal") {
            dateNotification = selected;
        }
        

        setNotificationDate(dateNotification);
        setNotificationTime(timeNotification);

        const timeNotification = `${notificationHour}:${notificationMin}`;

        if (frequency === "Diário") {
            setDayNotification("Diário");
        } else {
            setDayNotification(dateNotification);
        }
        setTimeNotification(timeNotification);

        const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
        };
    };

    const data = [
        { key: "Domingo", value: "Dom" },
        { key: "Segunda", value: "Seg" },
        { key: "Terça", value: "Ter" },
        { key: "Quarta", value: "Qua" },
        { key: "Quinta", value: "Qui" },
        { key: "Sexta", value: "Sex" },
        { key: "Sábado", value: "Sáb" },
    ];

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => showMode("time")}>
                <Text style={styles.buttonText}>Selecione a hora</Text>
            </TouchableOpacity>

            <View>
                {frequency === "Diário" ? (
                    <Text style={styles.notificationText}>Dia do hábito: Diário</Text>
                ) : null}
                {frequency === "Semanal" ? (
                    <SelectList
                        data={data}
                        search={false}
                        setSelected={setSelected}
                        onSelect={() => {
                            onChange();
                        }}
                        placeholder={selected}
                        boxStyles={styles.boxStyle}
                        inputStyles={styles.inputStyle}
                        dropdownStyles={styles.dropdownStyle}
                        dropdownItemStyles={styles.dropdownItemStyle}
                        dropdownTextStyles={styles.dropdownTextStyle}
                        arrowicon={
                            <Image
                                source={require('../../../assets/icons/arrowDropdown.png')}
                                style={styles.arrow}
                            />
                        }
                    />
                ) : null}

                {frequency === "Semanal" ? (
                    <Text style={styles.notificationText}>
                        Dia do hábito: {notificationDate}
                    </Text>
                ) : null}
            </View>
            <Text style={styles.notificationText}>
                Horário do hábito: {notificationTime}
            </Text>
            {show && (
                <DateTimePicker
                    textID="DateTimPicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    textContainer: {
        marginVertical: 20,
    },
    notificationText: {
        fontSize: 18,
        color: "white",
    },
    boxStyle: {
        borderWith: 1,
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    inputStyle: {
        color: "white",
    },
    dropdownStyle: {
        borderWith: 0,
    },
    dropdownItemStyle: {
        borderWith: 1,
        borderColor: "#bbbb",
        borderRadius: 10,
        marginBottom: 15,
    },
    dropdownTextStyle: {
        color: "#BBBBBB",
    },
    arrow: {
        width: 20,
        height: 20,
    },

});