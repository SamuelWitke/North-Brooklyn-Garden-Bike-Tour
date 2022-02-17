import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          This Project Is <br />
          <Text as={'span'} color={'green.400'}>
            Coming Soon
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          Till then check back and expore for sneak-peaks.
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
          >
            <a href="https://forms.gle/3z9tF5Cg45HuXNEN9">Get Started</a>
          </Button>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            <a href="https://forms.gle/3z9tF5Cg45HuXNEN9">Learn more</a>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
