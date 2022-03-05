import React from 'react';
import { Dimensions, Image } from 'react-native';
import theme, { Box, Text } from '../../components/Theme';
import { Button } from '../../components';
import { AuthenticationRoutes, StackNavigationProps } from '../../components/Navigation';

interface Welcome { }

const { width } = Dimensions.get("window");
const picture = {
    src: require("./5.png"),
    width: 3383,
    height: 4074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<AuthenticationRoutes, "Welcome">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Box flex={1} borderBottomRightRadius="xl" backgroundColor='grey' alignItems='center' justifyContent='flex-end' >
                <Image
                    source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height:
                            ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor='grey'
                    position='absolute'
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box
                    backgroundColor='white'
                    borderTopLeftRadius='xl'
                    flex={1}
                    justifyContent='space-evenly'
                    alignItems='center'
                    padding='xl'
                >
                    <Text variant='title1'>
                        Let's get started
                    </Text>
                    <Text variant='body' textAlign='center'>
                        Login to your account bellow or signup for an amazing experience
                    </Text>
                    <Button variant="primary"
                        label='Have an account? Login'
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button label="Joing us, it's Free"
                        onPress={() => { }}
                    />
                    <Button variant="transparent"
                        label='Forgot password?'
                        onPress={() => { }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
