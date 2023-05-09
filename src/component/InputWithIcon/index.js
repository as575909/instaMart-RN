import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyTextInput from '../MyTextInput'; 

const InputWithIcon = ({ iconName, placeholder, onChangeText, keyboardType, onEndEditing, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChangeText = (text) => {
    setValue(text);
    if (error) {
      setError('');
    }
    onChangeText(text);
  };



  const colors = {
    text1: 'black',
    text2: 'gray',
    error: 'red',
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: isFocused ? colors.text1 : colors.text2 }}>
        <Icon name={iconName} size={24} color={isFocused ? colors.text1 : colors.text2} style={{ marginRight: 8, padding: 10 }} />
        <MyTextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onEndEditing={onEndEditing}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={{ flex: 1 }}
        />
      </View>
      {error ? <Text style={{ color: colors.error }}>{error}</Text> : null}
    </View>
  );
};

export default InputWithIcon;
