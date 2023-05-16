// import { FlatList, View, BackHandler,} from "react-native";
// import React, { useEffect, useState } from "react";
// import ProductApi from "../../api/ProductApi";
// import HomeHeadNav from '../../component/HomeHeadNav';
// import CourseCard from '../../component/RenderItem';
// import { useSelector } from "react-redux";
// import { listEmptyComponent } from "../../component/EmptyList";
// import { onBackPress } from '../../utils/backPressHandler';
// import { handleBackPress } from "../../component/Alert";
// import BackHandling from "../../utils/BackHandling";


// const Products = ({ navigation }) => {
//   const [search, setSearch] = useState('');
//   const myCartItems = useSelector((state) => state.cart);
//   console.log('added products in cart', myCartItems);

//   // function handleBackPress() {
//   //   // showAlert('Exit App', 'Do you want to exit the App?','BackHandler.exitApp()');
//   //   BackHandler.exitApp();
//   //   return true;
//   // }

//   useEffect(() => {
//     onBackPress(handleBackPress);
//   }, []);


//   const courseCard = ({ item }) => {
//     return <CourseCard item={item} />;
//   };

//   return (
//     <View>

//       <HomeHeadNav searchChange={() => ("")} search={search} />
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={ProductApi}
//         renderItem={courseCard}
//         ListEmptyComponent={listEmptyComponent}
//       />
//     </View>
//   );
// };

// export default Products;






import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  BackHandler,
  ActivityIndicator
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFakeProducts } from '../../api/Axios';
import { styles } from './index.style'
import { listEmptyComponent } from '../../component/EmptyList';
import CourseCard from '../../component/RenderItem';
import HomeHeadNav from '../../component/HomeHeadNav';
import { onBackPress } from '../../utils/backPressHandler';
import { handleBackPress } from "../../component/Alert";

const Products = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  //   function handleBackPress() {
  //   showAlert('Exit App', 'Do you want to exit the App?','BackHandler.exitApp()');
  //   BackHandler.exitApp();
  //   return true;
  // }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFakeProducts();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
    onBackPress(handleBackPress);
  }, []);


  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <HomeHeadNav searchChange={(value) => searchFilterFunction(value)}
        search={search} />

      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={({ id }) => id.toString()}
          ListEmptyComponent={listEmptyComponent}
          renderItem={({ item }) => (
            <CourseCard
              item={item}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};
export default Products;