import MayorPic from "./MayorPic";
import {Box, Center, Flex, Square, Text} from "@chakra-ui/react";


const MayorBox = () => {
    return(
        <div>
            <Flex color='white'>
                <Center w='100px' bg='green.500'>
                    <Text>Box 1</Text>
                </Center>
                <Square bg='blue.500' size='150px'>
                    <Text>Box 2</Text>
                </Square>
                <Box flex='1' bg='tomato'>
                    <Text>Box 3</Text>
                </Box>
            </Flex>
            <MayorPic />
        </div>
    )
}

export default MayorBox;
