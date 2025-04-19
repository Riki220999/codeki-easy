import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type {{componentName}}ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  '{{componentName}}'
>;

interface {{componentName}}Props {
  navigation: {{componentName}}ScreenNavigationProp;
}

const {{componentName}}: React.FC<{{componentName}}Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{{componentName}} Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default {{componentName}};