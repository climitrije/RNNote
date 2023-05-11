import React, { useState } from 'react';
import {styles} from './Style.js';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAdd = () => {
    setNotes([...notes, { id: Date.now().toString(), note }]);
    setNote('');
  };

  const handleDelete = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  /*
  const handleSave = id => {
    saveNotes(notes.filter(note => note.id .. ));
  };
*/

  const handleChange = text => {
    setNote(text);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.note}>
        <Text style={styles.noteText}>{item.note}</Text>
        <TouchableOpacity onPress={() => handleSave(item.onPress)}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
       
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our notes</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={note}
          placeholder="Enter note"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.savedn}>Saved notes</Text>
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

