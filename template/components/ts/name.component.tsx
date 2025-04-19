import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface {{componentName}}Props {
  // define your props here
}

const {{componentName}}: React.FC<{{componentName}}Props> = () => {
  return (
    <View style={styles.container}>
      <Text>{{componentName}}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default {{componentName}};