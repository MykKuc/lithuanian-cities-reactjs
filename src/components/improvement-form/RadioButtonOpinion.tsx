import {FormControl, FormHelperText, FormLabel, HStack, Radio, RadioGroup} from "@chakra-ui/react";


const RadioButtonOpinion = () => {
    return(
        <FormControl as='fieldset'>
            <FormLabel as='legend'>Opinion about the quality of the website.</FormLabel>
            <RadioGroup defaultValue='Decent'>
                <HStack spacing='24px'>
                    <Radio value='Good'>Good</Radio>
                    <Radio value='Decent'>Decent</Radio>
                    <Radio value='Mediocre'>Mediocre</Radio>
                    <Radio value='Bad'>Bad</Radio>
                </HStack>
            </RadioGroup>
            <FormHelperText>Select only one option.</FormHelperText>
        </FormControl>
    )
}

export default RadioButtonOpinion;
