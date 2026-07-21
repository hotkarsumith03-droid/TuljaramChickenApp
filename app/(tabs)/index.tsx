import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Banner from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/Searchbar";
import { products } from "@/Data/product";

const categories = [
  { emoji: "🍗", name: "Chicken" },
  { emoji: "🥩", name: "Mutton" },
  { emoji: "🐟", name: "Seafood" },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [search]
  );

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Header />
      <SearchBar onChangeText={setSearch} value={search} />
      <Banner />

      <Text style={styles.sectionTitle}>Shop by category</Text>
      <View style={styles.categories}>
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Fresh picks</Text>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <Text style={styles.empty}>No products match your search.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111" },
  content: { paddingBottom: 28 },
  sectionTitle: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 14,
  },
  categories: { flexDirection: "row", marginLeft: 20 },
  empty: { color: "#BBB", fontSize: 16, marginHorizontal: 20 },
});
