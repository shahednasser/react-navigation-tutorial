import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function BackScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Back Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.goBack()}>
            Go Back
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});

export default BackScreen;