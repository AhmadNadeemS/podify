import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}
const AppInput: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.SECONDARY,
    borderRadius: 25,
    height: 45,
    borderWidth: 2,
    padding: 10,
    color: colors.CONTRAST,
  },
});

export default AppInput;
