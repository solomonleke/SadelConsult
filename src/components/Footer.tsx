import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Divider,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'700'} fontSize={'lg'} mb={2} color={'brand.teal'} fontFamily="heading">
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={'brand.navy'}
      color={'whiteAlpha.800'}
      pt={10}
      pb={5}
    >
      <Container maxW={'container.xl'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mb={10}>
          <Stack spacing={6}>
            <Box>
              <Text fontFamily="heading" fontWeight="bold" fontSize="2xl" color="brand.teal">
                SADEL CONSULTS
              </Text>
              <Text fontSize={'sm'} mt={2} color="whiteAlpha.700">
                Architecture & Engineering Value, Delivering Futures.
              </Text>
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <Icon as={FaTwitter as any} />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <Icon as={FaLinkedin as any} />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <Icon as={FaFacebook as any} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Architecture</Link>
            <Link href={'#'}>Engineering</Link>
            <Link href={'#'}>Cost Management</Link>
            <Link href={'#'}>Project Management</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Portfolio</Link>
            <Link href={'#'}>Compliance</Link>
            <Link href={'#'}>Careers</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <HStack>
              <Icon as={MdLocationOn as any} color="brand.teal" />
              <Text fontSize="sm" color="whiteAlpha.900">37 Babington Ashaye St, Okota, Lagos</Text>
            </HStack>
            <HStack>
              <Icon as={MdPhone as any} color="brand.teal" />
              <Text fontSize="sm" color="whiteAlpha.900">+234 802 393 8410</Text>
            </HStack>
            <HStack>
              <Icon as={MdEmail as any} color="brand.teal" />
              <Text fontSize="sm" color="whiteAlpha.900">sadelconsults@gmail.com</Text>
            </HStack>
           </Stack>
        </SimpleGrid>
        
        <Divider borderColor="whiteAlpha.300" mb={8} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
          <Text fontSize={'xs'} color="whiteAlpha.600">
            © 2024 Sadel Consults Limited (RC 798935). All rights reserved.
          </Text>
          <HStack spacing={4} justify={{ base: 'start', md: 'end' }}>
            <Text fontSize={'xs'} fontWeight="bold" color="brand.teal">COREN</Text>
            <Text fontSize={'xs'} fontWeight="bold" color="brand.teal">ARCON</Text>
            <Text fontSize={'xs'} fontWeight="bold" color="brand.teal">NIQS</Text>
            <Text fontSize={'xs'} fontWeight="bold" color="brand.teal">NSE</Text>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
