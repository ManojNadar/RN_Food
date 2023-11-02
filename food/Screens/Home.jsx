import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [allFood, setAllFood] = useState([]);

  //   console.log(allFood);
  useEffect(() => {
    async function allFoodItems() {
      const options = {
        method: "GET",
        url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
        params: {
          "nutrition-type": "cooking",
          "category[0]": "generic-foods",
          "health[0]": "alcohol-free",
        },
        headers: {
          "X-RapidAPI-Key":
            "a8c015a484msh9d6aceac1ac1d6cp1b5e69jsna13d6fb113f2",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data.hints);
        setAllFood(response.data.hints);
      } catch (error) {
        console.error(error);
      }
    }

    // allFoodItems();
  }, []);
  return (
    <View style={styles.container}>
      {allFood?.length ? (
        <View>
          {allFood?.map(({ food }) => (
            <View key={food.foodId}>
              <Text>{food.category}</Text>
              <Text>{food.KnownAs}</Text>
              <Text>{food.label}</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
