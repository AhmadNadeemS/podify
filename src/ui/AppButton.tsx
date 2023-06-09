import colors from '@utils/colors';
import {FC} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

const AppButton: FC<Props> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: colors.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  title: {
    color: colors.CONTRAST,
    fontSize: 18,
  },
});

export default AppButton;
