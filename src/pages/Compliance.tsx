import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { MdCheckCircle, MdGavel, MdShield, MdDescription } from 'react-icons/md';
import Layout from '../components/Layout';

const Compliance = () => {
  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white">Compliance & QHSE</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Upholding the highest standards of professional and statutory accountability.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
            <Stack spacing={8}>
              <Heading size="lg" fontFamily="heading" color="brand.navy">Statutory Registrations</Heading>
              <Box overflowX="auto">
                <Table variant="simple" size="sm">
                  <Thead bg="gray.50">
                    <Tr>
                      <Th>Body</Th>
                      <Th>Registration Number</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontWeight="bold">CAC Incorporation</Td>
                      <Td>RC 798935</Td>
                      <Td><Badge colorScheme="green">Active</Badge></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">FIRS Tax</Td>
                      <Td>2022–2024 clearance</Td>
                      <Td><Badge colorScheme="green">Compliant</Badge></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">PENCOM</Td>
                      <Td>PR0000798935</Td>
                      <Td><Badge colorScheme="green">Compliant</Badge></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">VAT Registration</Td>
                      <Td>MCV0600798935</Td>
                      <Td><Badge colorScheme="green">Active</Badge></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">BPP Federal Contractor</Td>
                      <Td>Registered</Td>
                      <Td><Badge colorScheme="green">Active</Badge></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Stack>

            <Stack spacing={8}>
              <Heading size="lg" fontFamily="heading" color="brand.navy">Professional Accreditations</Heading>
              <SimpleGrid columns={2} spacing={4}>
                <AccreditationCard icon={MdGavel} title="COREN" desc="Corporate Member" />
                <AccreditationCard icon={MdDescription} title="ARCON" desc="Corporate Member" />
                <AccreditationCard icon={MdShield} title="NSE" desc="Corporate Member" />
                <AccreditationCard icon={MdCheckCircle} title="NIQS" desc="Corporate Member" />
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={20} bg="brand.offWhite">
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack spacing={4} align="center" textAlign="center">
              <Heading fontFamily="heading">Quality, Health, Safety & Environment (QHSE)</Heading>
              <Text maxW="2xl">
                We are committed to maintaining a safe work environment and 
                delivering quality infrastructure with zero fatalities.
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <QHSEPolicy 
                title="ISO 9001:2015" 
                desc="Our Quality Management System is aligned with international ISO standards for technical consultancy." 
              />
              <QHSEPolicy 
                title="Zero Fatality" 
                desc="We maintain a strict zero-fatality HSE record across all our site supervision and project management tasks." 
              />
              <QHSEPolicy 
                title="Environmental Restoration" 
                desc="Focused on sustainable reclamation of abandoned mine sites and environmental impact mitigation." 
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

const AccreditationCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <HStack p={4} bg="white" shadow="sm" border="1px solid" borderColor="gray.100">
    <Icon as={icon as any} w={6} h={6} color="brand.teal" />
    <Box>
      <Text fontWeight="bold" size="sm">{title}</Text>
      <Text fontSize="xs" color="gray.600">{desc}</Text>
    </Box>
  </HStack>
);

const QHSEPolicy = ({ title, desc }: { title: string, desc: string }) => (
  <Box bg="white" p={8} shadow="md">
    <Heading size="sm" mb={4} color="brand.navy" textTransform="uppercase" letterSpacing="1px">
      {title}
    </Heading>
    <Text fontSize="sm" color="gray.600">{desc}</Text>
  </Box>
);

export default Compliance;
