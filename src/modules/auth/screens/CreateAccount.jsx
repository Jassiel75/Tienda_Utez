import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import { isEmpty } from "lodash";
import { Icon } from "@rneui/base";
import { Card } from "@rneui/themed";

export default function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({ email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const handleCreate = () => {
        if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
            setError({
                email: "El correo electrónico es requerido",
                password: "La contraseña es requerida",
                confirmPassword: "La confirmación de la contraseña es requerida",
            });
        } else if (password !== confirmPassword) {
            setError({
                email: "",
                password: "",
                confirmPassword: "Las contraseñas no coinciden",
            });
        } else {
            console.log("Cuenta creada exitosamente");
            console.log(email, password, confirmPassword);
            setError({ email: "", password: "", confirmPassword: "" });
        }
    };

    return (
        <View style={styles.screen}>
            <Card containerStyle={styles.card}>
                <View style={styles.container}>
                    <Image
                        source={{
                            uri: "https://imgs.search.brave.com/SEDIUwjW1d-zFLkhdx-QvBzXTnwfrNy8vQI_0ht3IYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzYzLzc1Lzgz/LzM2MF9GXzExNjM3/NTgzMzFfR0NBcUFV/U0R4ZGRwU0F5Wlpn/UVZDdnFvS082NDJD/UjcuanBn",
                        }}
                        style={styles.image}
                    />
                    <View style={styles.formContainer}>
                        <Input
                            placeholder="Correo electrónico"
                            label="Correo electrónico"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            errorMessage={error.email}
                            containerStyle={styles.input}
                            inputContainerStyle={{ width: "100%" }}
                        />
                        <Input
                            placeholder="Contraseña"
                            label="Contraseña"
                            secureTextEntry={showPassword}
                            onChangeText={setPassword}
                            errorMessage={error.password}
                            containerStyle={styles.input}
                            inputContainerStyle={{ width: "100%" }}
                            rightIcon={
                                <Icon
                                    onPress={() => setShowPassword(!showPassword)}
                                    type="material-community"
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                />
                            }
                        />
                        <Input
                            placeholder="Confirmar contraseña"
                            label="Confirmar contraseña"
                            secureTextEntry={showConfirmPassword}
                            onChangeText={setConfirmPassword}
                            errorMessage={error.confirmPassword}
                            containerStyle={styles.input}
                            inputContainerStyle={{ width: "100%" }}
                            rightIcon={
                                <Icon
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    type="material-community"
                                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                                />
                            }
                        />
                        <Button title="Crear cuenta" onPress={handleCreate} buttonStyle={styles.button} />
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20, // Pequeño margen en los lados
    },
    card: {
        width: "90%",
        maxWidth: 400,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    container: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    formContainer: {
        width: "100%",
    },
    input: {
        width: "100%", 
    },
    button: {
        backgroundColor: "#4abfa4",
        borderRadius: 10,
        marginVertical: 10,
        width: "100%", 
    },
});
