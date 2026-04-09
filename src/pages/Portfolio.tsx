import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  HStack,
  Flex,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import zariaImage from '../assets/ZariaWaterExpansion.webp';
import Abaji from '../assets/Abaji.jpg';
import Reclaimation from '../assets/Reclaimation.jpg';
import Ceddi from '../assets/Ceddi.jpg';
import PHCs from '../assets/PHCs.jpg';
import GenHospital from '../assets/GenHospital.jpg';
import PhWarri from '../assets/Ph-Warri.jpg';
import Minting from '../assets/Minting.jpg';

const PROJECTS = [
  {
    title: 'Zaria Water Supply Expansion',
    sector: 'Water',
    value: '761 km Network',
    description: 'Engineering design and supervision for water supply expansion in Zaria.',
    image: zariaImage,
  },
  {
    title: 'Abuja–Abaji Dual-Carriageway',
    sector: 'Transportation',
    value: '42 km Highway',
    description: 'Engineering design for a critical 42 km dual-carriageway section.',
    image: Abaji,
  },
  {
    title: 'Nationwide Mine Reclamation',
    sector: 'Mining',
    value: '₦1.47B',
    description: 'Engineering design and supervision of mine sites reclamation across 7 states including Edo, Ebonyi, and Plateau.',
    image: Reclaimation,
  },
  {
    title: 'Ceddi Plaza Abuja',
    sector: 'Buildings',
    description: 'Construction of the fire fighting system for a premier shopping and office complex in Abuja.',
    image: Ceddi,
  },
  {
    title: '5 State Hospitals Kaduna',
    sector: 'Health',
    value: '₦852M',
    description: 'Design and supervision of the upgrade for healthcare facilities across Kaduna state.',
    image: GenHospital,
  },
  {
    title: 'Nigerian Security Printing & Minting Factory',
    sector: 'Industrial',
    value: '₦450M',
    description: 'Installation of the HVAC system for the Minting factory in Abuja.',
    image: Minting,
  },
  {
    title: 'World Bank PHCs',
    sector: 'Health',
    description: 'Rehabilitation of healthcare centers in Ogun, Edo, and Akwa Ibom under World Bank financing.',
    image: PHCs,
  }
];

const SECTORS = ['All', 'Buildings', 'Transportation', 'Water', 'Mining', 'Health', 'Industrial'];

const Portfolio = () => {
  const { sector } = useParams();
  const navigate = useNavigate();
  
  // Map URL param to capitalization used in component state
  const initialFilter = sector 
    ? SECTORS.find(s => s.toLowerCase() === sector.toLowerCase()) ?? 'All'
    : 'All';

  const [filter, setFilter] = useState(initialFilter);

  // Sync state with URL parameter changes (e.g. from navbar clicks)
  useEffect(() => {
    if (sector) {
      const match = SECTORS.find(s => s.toLowerCase() === sector.toLowerCase());
      if (match) setFilter(match);
    } else {
      setFilter('All');
    }
  }, [sector]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    if (newFilter === 'All') {
      navigate('/portfolio');
    } else {
      navigate(`/portfolio/${newFilter.toLowerCase()}`);
    }
  };

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.sector === filter);

  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white">Project Portfolio</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Transforming development ambitions into sustainable infrastructure.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={10} borderBottom="1px solid" borderColor="gray.100">
        <Container maxW="container.xl">
          <Flex overflowX="auto" pb={4}>
            <HStack spacing={4}>
              {SECTORS.map(sector => (
                <Button
                  key={sector}
                  size="sm"
                  variant={filter === sector ? 'solid' : 'outline'}
                  colorScheme={filter === sector ? 'navy' : 'gray'}
                  onClick={() => handleFilterChange(sector)}
                  borderRadius="none"
                  px={6}
                >
                  {sector}
                </Button>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Portfolio;
