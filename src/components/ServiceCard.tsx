import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MdCheckCircle } from 'react-icons/md';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, items }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box
      p={8}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{ borderColor: 'brand.gold', shadow: 'xl', transform: 'translateY(-5px)' }}
      transition="all 0.3s"
      height="100%"
    >
      <Stack spacing={6}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'none'}
          bg={'brand.navy'}
          mb={1}
        >
          <Icon as={icon as any} w={8} h={8} />
        </Flex>
        <Stack spacing={3}>
          <Heading fontSize={'2xl'} fontFamily="heading" color="brand.navy">
            {title}
          </Heading>
          <Text color={'gray.600'} fontSize={'sm'}>
            {description}
          </Text>
        </Stack>
        <Stack spacing={2} pt={2}>
          {items.map((item, index) => (
            <Flex key={index} align="center">
              <Icon as={MdCheckCircle as any} w={2} h={2} color="brand.gold" mr={2} />
              <Text fontSize="xs" fontWeight="500">
                {item}
              </Text>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
