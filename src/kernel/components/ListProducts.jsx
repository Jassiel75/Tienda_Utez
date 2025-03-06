import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Card, Image } from "@rneui/base";
import { AirbnbRating } from '@rneui/themed';
import React from 'react'

const { width } = Dimensions.get("window"); // Obtener el ancho de la pantalla

export default function ListProducts(props) {
    const { images, name, description, price, rating, count, navigation } = props
    return (
        <TouchableOpacity 
            style={styles.cardContainer} 
            onPress={() => navigation.navigate("DetailProductStack", { product: { name, description, images, price, rating, count} })}
        >
            <Card containerStyle={styles.card}>
                <Image
                    source={{ uri: images ? images[0] : "https://via.placeholder.com/80x80.png" }}
                    style={styles.image}
                />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>
                    {description.length > 60 ? description.substring(0, 60) + "..." : description}
                </Text>
                <Text style={styles.price}>{price ? `$${price}` : "Precio no disponible"}</Text>
                <AirbnbRating count={5} defaultRating={rating / count} size={15} showRating={false} isDisabled={true} />
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width / 2 - 20, // 50% del ancho de la pantalla con margen
        padding: 5,
    },
    card: {
        height: 250,
        alignItems: "center",
        borderRadius: 10,
        padding: 10,

    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
    },
    description: {
        fontSize: 12,
        textAlign: "center",
        color: "gray",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4abfa4",
        textAlign: "center",
        marginTop: 5,
    },
});

