import {FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";


const EmailInput = () => {
    return(
    <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
    )
}

export default EmailInput;
