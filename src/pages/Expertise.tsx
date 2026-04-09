import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdArchitecture, MdEngineering, MdCalculate, MdConstruction } from 'react-icons/md';
import { PiNotepad } from "react-icons/pi";
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

const Expertise = () => {
  const { service } = useParams();
  const navigate = useNavigate();

  const tabMap: Record<string, number> = {
    'architecture': 0,
    'engineering': 1,
    'quantity-surveying': 2,
    'cost-management': 3,
    'project-management': 4,
  };

  const reverseTabMap: Record<number, string> = {
    0: 'architecture',
    1: 'engineering',
    2: 'quantity-surveying',
    3: 'cost-management',
    4: 'project-management',
  };

  const activeIndex = service ? tabMap[service] ?? 0 : 0;

  const handleTabChange = (index: number) => {
    navigate(`/expertise/${reverseTabMap[index]}`);
  };

  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white">Our Expertise</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Integrated multi-disciplinary solutions for complex infrastructure.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <Tabs 
            isFitted 
            variant="enclosed" 
            colorScheme="navy" 
            index={activeIndex} 
            onChange={handleTabChange}
          >
           <Box overflowX="auto">
  <TabList
    mb="1em"
    minW="max-content" // prevents shrinking
  >
    <Tab fontWeight="bold" fontSize="lg">
      <Icon as={MdArchitecture as any} mr={2} /> Architecture
    </Tab>
    <Tab fontWeight="bold" fontSize="lg">
      <Icon as={MdEngineering as any} mr={2} /> Engineering
    </Tab>
    <Tab fontWeight="bold" fontSize="lg">
      <Icon as={PiNotepad as any} mr={2} /> Quantity Surveying
    </Tab>
    <Tab fontWeight="bold" fontSize="lg">
      <Icon as={MdCalculate as any} mr={2} /> Cost Management
    </Tab>
    <Tab fontWeight="bold" fontSize="lg">
      <Icon as={MdConstruction as any} mr={2} /> Project Mgmt
    </Tab>
  </TabList>
</Box>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
                   <ServiceCard
                    title="Architecture"
                    description="From concept to commissioning, we deliver aesthetically pleasing and functional designs."
                    icon={MdArchitecture}
                    items={[
                      'Programming & Feasibility studies',
                      'Concept & Schematic Design',
                      'Design Development',
                      'Construction Documents (CDs)',
                      'Permitting & Approvals',
                      'Post-Occupancy Evaluation (POE)',
                    ]}
                  />
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.navy">Our Approach</Heading>
                    <Text>
                      We focus on translating development ambitions into sustainable 
                      and functional spaces. Our architectural team integrates closely 
                      with engineering and cost management to ensure every design is 
                      buildable and within budget.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </TabPanel>
              
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
                  <ServiceCard
                    title="Engineering"
                    description="Multi-disciplinary engineering services ensuring structural integrity and efficiency."
                    icon={MdEngineering}
                    items={[
                      'Civil/Highway/Bridge Engineering',
                      'Structural Engineering (RC, Steel, Geotechnical)',
                      'Mechanical (HVAC, Solar, Fire-Fighting)',
                      'Electrical & ICT (MV/LV, Renewables)',
                      'Water & Environment (EIA, Treatment Plants)',
                    ]}
                  />
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.navy">Technical Excellence</Heading>
                    <Text>
                      Our engineering team leverages decades of experience across diverse 
                      sectors, including nationwide highway networks and large-scale 
                      water expansion projects like the Zaria 761 km network.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
                   <ServiceCard
                    title="Quantity Surveying"
                    description="Professional cost management and financial control services ensuring projects are delivered within budget and to the highest standards."
                    icon={PiNotepad}
                    items={[
                      'Feasibility & Viability Studies',
                      'Cost Planning & Estimation',
                      'Procurement Advisory',
                      'Tender Management',
                      'Contract Preparation',
                      'Cost Control & Monitoring',
                      'Valuations & Payment Certificates',
                      'Change Order / Variation Management',
                      'Procurement of Specialist Work',
                      'Due Diligence',
                    ]}
                  />
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.navy">Cost Efficiency & Value</Heading>
                    <Text>
                      Our quantity surveying team ensures financial discipline across all project 
        stages, from initial cost planning to final account settlement. We deliver 
        value-driven solutions that optimize resources while maintaining quality 
        and project timelines.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
                  <ServiceCard
                    title="Cost & Commercial"
                    description="Expert commercial management to ensure value for money and transparency."
                    icon={MdCalculate}
                    items={[
                      'Feasibility Cost Advice',
                      'Bills of Quantities',
                      'PPA/FIDIC Tender Documentation',
                      'Variation Control & Monitoring',
                      'Claims & Dispute Resolution',
                    ]}
                  />
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.navy">Value Engineering</Heading>
                    <Text>
                      We manage costs across the infrastructure lifecycle, from 
                      initial feasibility studies to final accounts. Our QS team 
                      ensures that every penny spent delivers maximum value.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
                  <ServiceCard
                    title="Project Management"
                    description="Comprehensive oversight to deliver projects on time and within scope."
                    icon={MdConstruction}
                    items={[
                      'Scheduling (Primavera/MS Project)',
                      'HSE Planning & Supervision',
                      'Quality Assurance & Quality Control (QA/QC)',
                      'Risk Management',
                      'Defects-Liability Management',
                    ]}
                  />
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.navy">Quality Control</Heading>
                    <Text>
                      Our project managers provide dedicated on-site supervision 
                      to ensure adherence to technical specifications, safety protocols, 
                      and strict timelines.
                    </Text>
                  </Stack>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </Layout>
  );
};

export default Expertise;
