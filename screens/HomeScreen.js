import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function HomeScreen ({ navigation }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return navigation.addListener('blur', () => {
      setCounter(counter + 1);
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title={`Navigation Count: ${counter}`} />
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate to 'Book' Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Book')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate with Parameters" />
        <Card.Content>
          <TextInput mode="outlined" label="Name" value={name} onChangeText={(text) => setName(text)} style={styles.textInput} />
          <Button mode="contained" disabled={name.length === 0} onPress={() => navigation.navigate('Name', { name })}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate to Route with Title" />
        <Card.Content>
          <TextInput mode="outlined" label="Title" value={title} onChangeText={(text) => setTitle(text)} style={styles.textInput} />
          <Button mode="contained" disabled={title.length === 0} onPress={() => navigation.navigate('Title', { title })}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Navigate to 'Back' Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Back')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  },
  textInput: {
    marginBottom: 10
  }
});

export default HomeScreen