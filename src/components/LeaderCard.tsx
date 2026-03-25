import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

interface LeaderCardProps {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, qualifications, experience }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl', borderColor: 'brand.teal' }}
      transition="all 0.3s"
      role="group"
    >
      <Stack spacing={4} align="center" textAlign="center">
        <Avatar size="2xl" name={name} mb={4} src="" bg="brand.navy" color="white" />
        <Stack spacing={1}>
          <Heading fontSize={'xl'} fontFamily="heading" color="brand.navy">
            {name}
          </Heading>
          <Text fontWeight={600} color={'brand.teal'}>
            {role}
          </Text>
          <Text fontSize={'xs'} color={'gray.500'} fontWeight="bold">
            {qualifications}
          </Text>
        </Stack>
        <Text color={'gray.600'} fontSize={'sm'}>
          {experience}
        </Text>
      </Stack>
    </Box>
  );
};

export default LeaderCard;
