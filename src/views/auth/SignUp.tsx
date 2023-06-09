import AuthInputField from '@components/form/AuthInputField';
import AppInput from '@ui/AppInput';
import colors from '@utils/colors';
import {Formik, useFormikContext} from 'formik';
import {FC, useState} from 'react';
import * as yup from 'yup';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';
import Form from '@components/form';
import SubmitBtn from '@components/SubmitBtn';

interface Props {}

const signupSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .min(3, 'alteast 3 characters')
    .required('Name is required'),
  email: yup
    .string()
    .trim('email is missing!')
    .email('invalid email')
    .required('email is required'),
  password: yup
    .string()
    .trim('password is missing!')
    .min(8, 'invalid password')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
      'Password is too simple',
    )
    .required('password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Form
        validationSchema={signupSchema}
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        <View style={styles.formContainer}>
          <AuthInputField
            name="name"
            placeholder="Ahmad Nadeem"
            label="Name"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="email"
            label="Email"
            placeholder="ahmad@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="password"
            label="Password"
            placeholder="********"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
            secureTextEntry
          />
          <SubmitBtn title="Sign Up" />
        </View>
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: colors.SECONDARY,
    borderRadius: 25,
    height: 45,
    borderWidth: 2,
    padding: 10,
    color: colors.CONTRAST,
  },
  label: {
    color: colors.CONTRAST,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default SignUp;
