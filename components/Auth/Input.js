import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../consts/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
    placeholder
}) {
  function LabelText() {
    if (label) {
      return (
          <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
            {label}
          </Text>
      )
    }
  }

  return (
    <View style={styles.inputContainer}>
      <LabelText />
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    fontSize: 16,
    height: 55,
    minWidth: '49%'
  },
  inputInvalid: {
    backgroundColor: Colors.error500,
  },
});
