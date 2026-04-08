import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import LeaderCard from '../components/LeaderCard';

const LEADERS = [
  {
    name: 'Arc. Muyiwa Osho',
    role: 'Team Leader / Lead Architect',
    qualifications: 'B.Sc, MNIA, ARCON',
    experience: '36 years experience in large-scale architectural design and urban development.',
  },
  {
    name: 'Mr. Segun S. Adeleke',
    role: 'Principal Partner / Project Coordinator',
    qualifications: 'MBA, MNIQS, RQS, ANIM',
    experience: '34 years experience in cost management and project coordination.',
  },
  {
    name: 'Engr. Adedeji K. Aro',
    role: 'Partner, Civil/Structural',
    qualifications: 'HND Civil, MNSE, COREN',
    experience: '36 years experience in structural design and highway engineering.',
  },
  {
    name: 'Engr. Tajudeen M. Ibrahim',
    role: 'Senior Mechanical Engineer',
    qualifications: 'PGD, HND, MNSE',
    experience: '29 years experience in HVAC, fire-fighting, and industrial mechanical systems.',
  },
  {
    name: 'Mr. Abereoje O. Davids',
    role: 'QS/Contract Specialist',
    qualifications: 'HND QS, MNIQS, MCOST, MSAQS',
    experience: '27 years experience in contract administration and FIDIC frameworks.',
  },
  {
    name: 'Engr. Kusimo Kolawole',
    role: 'Project Manager, Civil/Highways',
    qualifications: 'HND, MNSE, AMASCE',
    experience: '22 years experience in construction management and site supervision.',
  },
];

const Leadership = () => {
  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white">Our Leadership</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Guided by decades of technical expertise and professional integrity.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Leadership;
