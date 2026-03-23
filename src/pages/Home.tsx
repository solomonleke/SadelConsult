import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { MdCheckCircle, MdArrowForward, MdArchitecture, MdEngineering, MdCalculate, MdConstruction } from 'react-icons/md';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import zariaImage from '../assets/ZariaWaterExpansion.webp';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        bg={'brand.navy'}
        color="white"
        py={{ base: 20, md: 32 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW={'container.xl'}>
          <Stack spacing={8} maxW={'2xl'} zIndex={1} position="relative">
            <Text
              color={'brand.gold'}
              fontWeight={700}
              fontSize={'sm'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
            >
              Established 2001 | RC 798935
            </Text>
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={'1.1'}
              fontFamily="heading"
            >
              Architecture & Engineering Value, Delivering Futures.
            </Heading>
            <Text fontSize={'lg'} color={'whiteAlpha.800'}>
              Sadel Consults Limited is a Nigerian multi-disciplinary consultancy providing 
              sustainable, value-for-money solutions through creative design and rigorous engineering.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bg={'brand.gold'}
                color={'brand.navy'}
                _hover={{ bg: 'yellow.500' }}
                size="lg"
                px={10}
              >
                View Portfolio
              </Button>
              <Button
                variant={'outline'}
                color={'white'}
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.100' }}
                size="lg"
                px={10}
              >
                Our Services
              </Button>
            </Stack>
          </Stack>
        </Container>
        
        {/* Abstract Background Element */}
        <Box
          position="absolute"
          top="-10%"
          right="-10%"
          width="60%"
          height="120%"
          bg="whiteAlpha.100"
          transform="skewX(-20deg)"
          zIndex={0}
        />
      </Box>

      {/* Compliance Ribbon */}
      <Box bg="brand.gold" py={4}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontWeight="bold" color="brand.navy" fontSize="sm">
              COMPLIANCE AT A GLANCE:
            </Text>
            <Stack direction="row" spacing={6} wrap="wrap" justify="center">
              <ComplianceBadge label="FIRS Tax Clearance" />
              <ComplianceBadge label="PENCOM" />
              <ComplianceBadge label="BPP Federal Contractor" />
              <ComplianceBadge label="COREN Corporate" />
              <ComplianceBadge label="ARCON Corporate" />
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Who We Are Intro */}
      <Box py={20} bg="brand.offWhite">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Stack spacing={6}>
              <Heading fontFamily="heading">Who We Are</Heading>
              <Text fontSize="lg">
                Founded in 2001 and incorporated under CAC (RC 798935), Sadel Consults 
                Limited is active across all 36 states and the FCT. Our mission is to 
                translate development ambitions into bankable, sustainable solutions.
              </Text>
              <Text>
                We provide an integrated multi-disciplinary approach spanning Architecture, 
                Engineering, Environment, Cost Management, and Project Management.
              </Text>
              <Button
                variant="link"
                color="brand.navy"
                rightIcon={<Icon as={MdArrowForward as any} />}
                fontWeight="bold"
              >
                Learn More About Our History
              </Button>
            </Stack>
            <Flex bg="gray.200" h="400px" align="center" justify="center" color="gray.500">
              Project Visualization Placeholder
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Service Pillars */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Stack spacing={12} align="center" textAlign="center" mb={16}>
            <Heading fontFamily="heading">Multi-disciplinary Expertise</Heading>
            <Text maxW="3xl" fontSize="lg">
              We provide comprehensive consultancy services across the entire infrastructure lifecycle.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <ServiceCard
              title="Architecture"
              description="Concept design, 3D visualization, BIM modeling, and urban planning."
              icon={MdArchitecture}
              items={['Schematic Design', 'Green-Building Advisory', 'Interior Architecture']}
            />
            <ServiceCard
              title="Engineering"
              description="Civil, structural, mechanical, electrical, and environmental engineering."
              icon={MdEngineering}
              items={['Civil/Highway/Bridge', 'Structural RC/Steel', 'Water & Environment']}
            />
            <ServiceCard
              title="Cost Management"
              description="Quantity surveying, commercial advisory, and dispute resolution."
              icon={MdCalculate}
              items={['Bills of Quantities', 'Tender Documentation', 'Claims Control']}
            />
            <ServiceCard
              title="Project Management"
              description="Full-lifecycle construction supervision and risk management."
              icon={MdConstruction}
              items={['Scheduling (Primavera)', 'QA/QC', 'HSE Planning']}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Flagship Projects */}
      <Box py={20} bg="brand.navy" color="white">
        <Container maxW="container.xl">
          <Stack spacing={12} mb={16}>
            <Heading fontFamily="heading" color="brand.gold">Flagship Projects</Heading>
            <Flex justify="space-between" align="flex-end">
              <Text maxW="2xl" color="whiteAlpha.800">
                Delivering critical infrastructure across Nigeria.
              </Text>
              <Button colorScheme="yellow" variant="link" color="brand.gold">
                View All Projects
              </Button>
            </Flex>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <ProjectCard
              title="Zaria Water Supply Expansion"
              image={zariaImage}
              sector="Water & Hydraulics"
              value="761 km Network"
              description="Expansion of water supply for 2.2M population including 27 reservoirs and 11 booster stations."
            />
            <ProjectCard
              title="Abuja–Abaji Dual-Carriageway"
              sector="Transportation"
              value="42 km Highway"
              description="Engineering supervision and design for a critical 42 km dual-carriageway section."
            />
            <ProjectCard
              title="Nationwide Mine Reclamation"
              sector="Environment"
              value="₦1.47B"
              description="Abandoned mine sites reclamation across 7 states including Edo, Ebonyi, and Plateau."
            />
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

const ComplianceBadge = ({ label }: { label: string }) => (
  <HStack spacing={1}>
    <Icon as={MdCheckCircle as any} color="brand.navy" />
    <Text fontSize="xs" fontWeight="bold" color="brand.navy">
      {label} ✓
    </Text>
  </HStack>
);

const HStack = ({ children, spacing }: { children: React.ReactNode; spacing: number }) => (
  <Flex gap={spacing} align="center">
    {children}
  </Flex>
);

export default Home;
