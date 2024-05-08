import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from '@/assets/data/air-bnb-listings.json';

const Page = () => {
  const [category, setCategory] = useState("Tiny Homes");
  const items = useMemo(()=> listingsData as any,[]);

  const onDataChanged = (category: string) => {
    // console.log("Changed_", category);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default Page;
