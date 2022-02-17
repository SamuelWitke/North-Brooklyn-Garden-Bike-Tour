import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Link,
  Box,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcGlobe,
  FcDonate,
  FcIdea,
} from 'react-icons/fc';
import { IoAnalyticsSharp, IoRocket, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';
import Logo from '../assets/nbkparks.jpg';

interface FeatureProps {
  text: string;
  title: string;
  icon?: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        shadow="md"
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
export default () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Events, Volunteer, Donate
          </Text>
          <Heading>North Brooklyn Parks Alliance</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Our alliance is strong. We work together toward common goals that
            will benefit our community.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <a href="https://nbkparks.org/our-mission/">
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={'yellow.500'}
                    w={5}
                    h={5}
                  />
                }
                title={'Our Mission'}
                text="Our mission is to create an equitable, accessible, and vibrant parks & open space system in North Brooklyn."
              />
            </a>
            <a href="https://nbkparks.org/our-impact/">
              <Feature
                icon={<Icon as={IoRocket} color={'green.500'} w={5} h={5} />}
                title={'Our Impact'}
                text="It’s never easy to see the trees from the forest, but we’ve stayed focused for almost twenty years. Invest and improve is our model."
              />
            </a>
            <a href="https://nbkparks.org/our-people/">
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                title={'Our People'}
                text="North Brooklyn Parks Alliance was born out of the environmental justice movements of the 1980s and 90s. Many of the forebears of those movements make up or inspire our board, staff, and volunteers."
              />
            </a>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            boxSize="80rm"
            alt={'feature image'}
            src={Logo}
          />
        </Flex>
      </SimpleGrid>
      <Stack
        py={{ base: 10, md: 18 }}
        spacing={1}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
      ></Stack>
      <Box p={4}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
          <a href={`https://samuelwitke.github.io/North-Brooklyn-Garden-Bike-Tour/graph`}>
            <Feature
              icon={<Icon as={FcGlobe} w={10} h={10} />}
              title={'Dependency Graph'}
              text={'Click to See the dependency graph'}
            />
          </a>
          <a
            href={`https://github.com/CUNYTechPrep/.github/blob/feature/SW/open-saused/CONTRIBUTING.md`}
          >
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={'CONTRIBUTING.md'}
              text={'Contributions welcome!'}
            />
          </a>
          <a href={`https://github.com/SamuelWitke/North-Brooklyn-Garden-Bike-Tour/discussions`}>
            <Feature
              icon={<Icon as={FcIdea} w={10} h={10} />}
              title={'Discussions'}
              text={'Use discussions to ask and answer questions.'}
            />
          </a>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
