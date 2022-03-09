import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity, FlatList
} from 'react-native';
import FillSentanse from './src/compoments/ToolTipComponent';
const options: Array<string> = ["folgen", "schaf", "Bereiden", "Hause"];
const App = () => {
  const [toolTipVisible, setTooltipVisible] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={styles.title}>Fill the missing  word</Text>
        <Text style={styles.subTitle}>The <Text style={styles.subtitleunderline}>house</Text> is small.</Text>
        <View style={styles.flatList}>
          <FillSentanse word="Das" english="The" />
          <View style={styles.blank} />
          <FillSentanse word="isn" english="is" />
          <FillSentanse word="klein." english="small." />
        </View>
        <FlatList
          data={options}
          keyExtractor={(index) => index}
          numColumns={2}
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          style={{ marginTop: 35 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.optionBtn}><Text style={styles.optBtntext} >{item}</Text></TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#76dafe',
    flex: 1,
  },
  cardView: {
    flex: 1,
    marginTop: 70,
    backgroundColor: '#3c6d82',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    padding: 10
  },
  title: {
    marginTop: 50,
    color: 'white',
    fontSize: 15
  },
  subTitle: {
    marginTop: 25,
    color: 'white',
    fontSize: 26
  },
  subtitleunderline: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  blank: {
    borderBottomWidth: 1,
    borderColor: 'white',
    width: 80
  },
  optionBtn: {
    padding: 12,
    borderRadius: 10,
    shadowColor: "#151D3B",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    backgroundColor: 'white',
  },
  optBtntext: {
    textAlign: 'center',
    color: '#3c6d82',
    fontWeight: 'bold'

  }, flatList: {
    flexDirection: "row",
    marginTop: 55
  },
  continueBtn: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#6492a6',
    paddingVertical: 16,
    marginBottom: 30
  },
  continueText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default App;
