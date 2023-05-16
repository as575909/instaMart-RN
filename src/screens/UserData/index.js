import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFakeProducts } from '../../api/Axios';
import { styles } from './index.style'
import { listEmptyComponent } from '../../component/EmptyList';
import CourseCard from '../../component/RenderItem';

const Product = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <BackHandling />
      <Header
        title={t('product_list')}
        showHeartIcon={true}
        showBellIcon={false}
      /> */}
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={({id}) => id.toString()}
          ListEmptyComponent={listEmptyComponent}
          renderItem={({item}) => (
            <CourseCard
              item={item}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};
export default Product;