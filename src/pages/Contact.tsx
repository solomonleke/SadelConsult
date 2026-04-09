import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Layout from '../components/Layout';

const Contact = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Layout>
      <Box bg="brand.navy" color="white" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={4} maxW="3xl">
            <Heading as="h1" size="2xl" fontFamily="heading" color="white" >Contact Us</Heading>
            <Text fontSize="xl" color="whiteAlpha.800">
              Speak with our consultants about your next project.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
            <VStack align="start" spacing={10}>
              <Stack spacing={4}>
                <Heading size="lg" fontFamily="heading" color="brand.navy">Get in Touch</Heading>
                <Text color="gray.600">
                  Fill out the form and our team will get back to you within 24 hours.
                </Text>
              </Stack>

              <Stack spacing={6} w="full">
                <Box bg={bgColor} p={8} borderWidth="1px" borderColor={borderColor}>
                  <VStack spacing={4}>
                    <FormControl id="name">
                      <FormLabel>Full Name</FormLabel>
                      <Input type="text" borderRadius="none" borderColor="gray.300" />
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Email Address</FormLabel>
                      <Input type="email" borderRadius="none" borderColor="gray.300" />
                    </FormControl>
                    <FormControl id="subject">
                      <FormLabel>Subject</FormLabel>
                      <Input type="text" borderRadius="none" borderColor="gray.300" />
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Message</FormLabel>
                      <Textarea borderRadius="none" borderColor="gray.300" rows={6} />
                    </FormControl>
                    <Button
                      bg={'brand.navy'}
                      color={'white'}
                      _hover={{ bg: 'brand.teal', color: 'brand.navy' }}
                      w="full"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>

            <Stack spacing={10}>
              <Stack spacing={6}>
                <Heading size="lg" fontFamily="heading" color="brand.navy">Our Offices</Heading>
                
                <OfficeCard 
                  title="Head Office (Lagos)"
                  address="37 Babington Ashaye Street, Okota, Lagos"
                  phone="+234 802 393 8410"
                  email="info@sadelconsults.com"
                />
                
                <OfficeCard 
                  title="Abuja Branch"
                  address="Plot 67 Emmanuel Ozigi Street, Apo, Abuja"
                  phone="+234 802 335 9810"
                  email="info@sadelconsults.com"
                />
              </Stack>

              <Stack spacing={6}>
                <Heading size="lg" fontFamily="heading" color="brand.navy">Key Contacts</Heading>
                <Box p={6} bg="brand.offWhite" borderLeft="4px solid" borderColor="brand.teal">
                  <Text fontWeight="bold" color="brand.navy">Arc. Muyiwa Osho</Text>
                </Box>
                <Box p={6} bg="brand.offWhite" borderLeft="4px solid" borderColor="brand.teal">
                  <Text fontWeight="bold" color="brand.navy">Mr. Segun Adeleke</Text>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Map Placeholder */}
      <Box h="400px" bg="gray.100">
        <Flex align="center" justify="center" h="100%" color="gray.500">
          <Icon as={MdLocationOn as any} w={10} h={10} mb={4} />
          <Text fontWeight="bold">Google Maps Integration Placeholder</Text>
        </Flex>
      </Box>
    </Layout>
  );
};

const OfficeCard = ({ title, address, phone, email }: { title: string, address: string, phone: string, email: string }) => (
  <Box p={6} borderWidth="1px" borderColor="gray.100" shadow="sm">
    <Heading size="md" mb={4} color="brand.navy">{title}</Heading>
    <VStack align="start" spacing={3}>
      <HStack>
        <Icon as={MdLocationOn as any} color="brand.teal" />
        <Text fontSize="sm">{address}</Text>
      </HStack>
      <HStack>
        <Icon as={MdPhone as any} color="brand.teal" />
        <Text fontSize="sm">{phone}</Text>
      </HStack>
      <HStack>
        <Icon as={MdEmail as any} color="brand.teal" />
        <Text fontSize="sm">{email}</Text>
      </HStack>
    </VStack>
  </Box>
);

export default Contact;
