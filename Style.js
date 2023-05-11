import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#7E9494',
  },
  header: {
    padding: 30,
    backgroundColor: '#3867d6',
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },

  savedn:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },

  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#3867d6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    marginVertical: 20,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  noteText: {
    fontSize: 18,
    flex: 1,
    paddingRight: 10,
  },
  deleteButton: {
    padding:10,
    color: 'red',
    fontSize: 17,
  },
  saveButton: {
    padding:10,
    color: 'green',
    fontSize: 17,
    marginLeft: 10
  },
});