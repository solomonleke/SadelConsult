import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
  Img,
} from '@chakra-ui/react';
import { MdCheckCircle, MdArrowForward, MdArchitecture, MdEngineering, MdCalculate, MdConstruction } from 'react-icons/md';
import { PiNotepad } from "react-icons/pi";
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import zariaImage from '../assets/ZariaWaterExpansion.webp';
import Abaji from '../assets/Abaji.jpg';
import Engineering from '../assets/Engineering.jpg';
import Reclaimation from '../assets/Reclaimation.jpg';
import Highway from '../assets/Highway.jpg';
import Civil from '../assets/Civil.jpg';
import Architecture from '../assets/Architecture.jpg';
import Water from '../assets/Water.jpg';
import About from '../assets/About.jpg';

const Home = () => {
  const Navigate = useNavigate();
  const images = [Architecture, Civil, Engineering, Water, Highway];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

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
              color={'brand.teal'}
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
              color="white"
              textShadow="0 2px 8px rgba(0,0,0,0.6)"
            >
              Architecture & Engineering Value, Delivering Futures.
            </Heading>
            <Text fontSize={'lg'} color={'whiteAlpha.800'} textShadow="0 2px 8px rgba(0,0,0,0.6)" >
              Sadel Consults Limited is a Nigerian multi-disciplinary consultancy providing
              sustainable, value-for-money solutions through creative design and rigorous engineering.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bg={'brand.teal'}
                color={'brand.navy'}
                _hover={{ bg: '#008f7a' }}
                size="lg"
                px={10}
                onClick={() => Navigate('/portfolio')}
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
                onClick={() => Navigate('/expertise')}
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
          overflow="hidden"
          transform="skewX(-20deg)"
          zIndex={0}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundImage={`url(${img})`}
              backgroundSize="cover"
              backgroundPosition="center"
              transition="opacity 0.8s ease-in-out"
              opacity={index === currentIndex ? 1 : 0}
            />
          ))}

          {/* Optional overlay for readability */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="blackAlpha.400"
          />
        </Box>
      </Box>

      {/* Compliance Ribbon */}
      <Box bg="brand.teal" py={4}>
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
                onClick={() => Navigate('/about')}
              >
                Learn More About Our History
              </Button>
            </Stack>
            <Img src={About} alt="About Us" />
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
              title="Quantity Surveying"
              description="Comprehensive cost management and financial control for construction projects."
              icon={MdCalculate}
              items={[
                'Procurement & Tendering',
                'Cost Estimation & Budgeting',
                'Bills of Quantities (BOQ)',

              ]}
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
            <Heading fontFamily="heading" color="brand.teal">Flagship Projects</Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align={{ base: 'flex-start', md: 'flex-end' }}
              gap={{ base: 4, md: 0 }}
            >
              <Text
                maxW={{ base: 'full', md: '2xl' }}
                color="whiteAlpha.800"
              >
                Delivering critical infrastructure across Nigeria.
              </Text>

              <Button
                colorScheme="teal"
                variant="link"
                color="brand.teal"
                alignSelf={{ base: 'flex-start', md: 'auto' }}
                onClick={() => Navigate('/portfolio')}
              >
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
              description="Engineering design and supervision for water supply expansion in Zaria."
            />
            <ProjectCard
              title="Abuja–Abaji Dual-Carriageway"
              image={Abaji}
              sector="Transportation"
              value="42 km Highway"
              description="Engineering design for a critical 42 km dual-carriageway section."
            />
            <ProjectCard
              title="Nationwide Mine Reclamation"
              image={Reclaimation}
              sector="Environment"
              value="₦1.47B"
              description="Engineering design and supervision of mine sites reclamation across 7 states including Edo, Ebonyi, and Plateau."
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
