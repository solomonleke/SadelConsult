import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

interface ProjectCardProps {
  title: string;
  sector: string;
  value?: string;
  description: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, sector, value, description, image }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{ transform: 'translateY(-5px)', shadow: '2xl', borderColor: 'brand.teal' }}
      transition="all 0.3s"
      overflow="hidden"
    >
      <Box h="240px" bg="gray.100" position="relative">
        {image ? (
          <Image src={image} alt={title} objectFit="cover" h="100%" w="100%" />
        ) : (
          <Flex align="center" justify="center" h="100%" color="gray.400" fontSize="sm">
            Project Visualization
          </Flex>
        )}
        <Badge
          position="absolute"
          top={4}
          left={4}
          bg="brand.navy"
          color="white"
          px={3}
          py={1}
          fontSize="xs"
          textTransform="uppercase"
        >
          {sector}
        </Badge>
      </Box>
      <Stack p={6} spacing={3}>
        <Heading fontSize={'xl'} fontFamily="heading" color="brand.navy" noOfLines={2}>
          {title}
        </Heading>
        {value && (
          <Text fontWeight="bold" color="brand.teal" fontSize="sm">
            Value: {value}
          </Text>
        )}
        <Text color={'gray.600'} fontSize={'sm'} noOfLines={3}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
