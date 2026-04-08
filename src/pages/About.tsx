import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { MdHistory, MdGroups } from 'react-icons/md';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white">Who We Are</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Trusted Engineering and Architecture Consultancy since 2001.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading fontFamily="heading" color="brand.navy" size="lg">Our Journey</Heading>
              <Text>
                Sadel Consults Limited (RC 798935) was founded in 2001 with a vision to 
                provide world-class engineering and architectural solutions tailored for 
                the African landscape. 
              </Text>
              <Text>
                With over two decades of experience, we have successfully executed 
                projects across all 36 states of Nigeria and the Federal Capital 
                Territory, building a reputation for technical excellence and 
                integrity.
              </Text>
              <Flex gap={4}>
                <Feature icon={MdHistory} title="20+ Years" desc="of industry experience" />
                <Feature icon={MdGroups} title="Multi-disciplinary" desc="Expert team" />
              </Flex>
            </VStack>
            <Box bg="gray.100" p={8} borderLeft="4px solid" borderColor="brand.teal">
              <Heading size="md" mb={4} color="brand.navy">Our Mission</Heading>
              <Text fontStyle="italic" fontSize="lg">
                "To translate development ambitions into bankable, sustainable, 
                value-for-money solutions through creative design, rigorous cost 
                control, and diligent supervision."
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={20} bg="brand.offWhite">
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Heading textAlign="center" fontFamily="heading">Integrated Approach</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Card 
                title="Design Excellence" 
                text="Combining aesthetics with functionality to create spaces that inspire and endure."
              />
              <Card 
                title="Rigorous Engineering" 
                text="Applying advanced technical standards to ensure structural integrity and safety."
              />
              <Card 
                title="Value Management" 
                text="Optimizing costs without compromising on quality through disciplined project oversight."
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

const Feature = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <Stack spacing={1}>
    <Icon as={icon} w={6} h={6} color="brand.teal" />
    <Text fontWeight="bold" size="sm">{title}</Text>
    <Text fontSize="xs" color="gray.600">{desc}</Text>
  </Stack>
);

const Card = ({ title, text }: { title: string, text: string }) => (
  <Box bg="white" p={8} shadow="sm" border="1px solid" borderColor="gray.100">
    <Heading size="md" mb={4} color="brand.navy">{title}</Heading>
    <Text color="gray.600">{text}</Text>
  </Box>
);

export default About;
