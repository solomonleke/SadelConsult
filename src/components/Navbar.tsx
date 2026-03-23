import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Container,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/sadelLogo.png';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="sticky">
      <Flex
        bg={useColorModeValue('brand.navy', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'70px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('brand.gold', 'gray.900')}
        align={'center'}
      >
        <Container maxW="container.xl" display="flex" alignItems="center">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{ bg: 'whiteAlpha.200' }}
              color="white"
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link
              as={RouterLink}
              to="/"
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                src={logo}
                alt="SADEL CONSULTS"
                h={{ base: '35px', md: '45px' }}
                objectFit="contain"
              />
            </Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={RouterLink}
              to="/contact"
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'brand.navy'}
              bg={'brand.gold'}
              _hover={{
                bg: 'yellow.500',
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('whiteAlpha.900', 'gray.200');
  const linkHoverColor = useColorModeValue('brand.gold', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const location = useLocation();

  const isItemActive = (navItem: NavItem) => {
    if (navItem.href === '/') {
      return location.pathname === '/';
    }
    if (navItem.href && location.pathname.startsWith(navItem.href)) {
      return true;
    }
    if (navItem.children) {
      return navItem.children.some((child) => 
        child.href && location.pathname.startsWith(child.href)
      );
    }
    return false;
  };

  return (
    <Stack direction={'row'} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={RouterLink}
                p={2}
                to={navItem.href ?? '#'}
                fontSize={'xs'}
                fontWeight={700}
                color={isItemActive(navItem) ? 'brand.gold' : linkColor}
                textTransform="uppercase"
                letterSpacing="1px"
                borderBottom={isItemActive(navItem) ? '2px solid' : '2px solid transparent'}
                borderColor={isItemActive(navItem) ? 'brand.gold' : 'transparent'}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'none'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const location = useLocation();
  const isActive = href && location.pathname.startsWith(href);
  const activeBg = useColorModeValue('navy.50', 'gray.900');

  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      role={'group'}
      display={'block'}
      p={2}
      bg={isActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box borderLeft={isActive ? '4px solid' : 'none'} borderColor="brand.gold" pl={isActive ? 2 : 0}>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.gold' }}
            color={isActive ? 'brand.navy' : 'gray.800'}
            fontWeight={isActive ? 700 : 500}
            fontSize="sm"
          >
            {label}
          </Text>
          <Text fontSize={'xs'} color="gray.600">{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={isActive ? 'translateX(0)' : 'translateX(-10px)'}
          opacity={isActive ? '100%' : 0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'brand.gold'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  const isItemActive = () => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href && location.pathname.startsWith(href)) {
      return true;
    }
    if (children) {
      return children.some((child) => 
        child.href && location.pathname.startsWith(child.href)
      );
    }
    return false;
  };

  const isActive = isItemActive();
  const activeColor = useColorModeValue('gray.600', 'gray.200');
  const activeBorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={isActive ? 700 : 600}
          color={isActive ? 'brand.gold' : activeColor}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
            color={isActive ? 'brand.gold' : 'inherit'}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={activeBorderColor}
          align={'start'}
        >
          {children &&
            children.map((child) => {
              const isChildActive = child.href && location.pathname.startsWith(child.href);
              return (
                <Link
                  key={child.label}
                  py={2}
                  as={RouterLink}
                  to={child.href ?? '#'}
                  color={isChildActive ? 'brand.gold' : 'inherit'}
                  fontWeight={isChildActive ? 'bold' : 'normal'}
                >
                  {child.label}
                </Link>
              );
            })}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Who We Are',
    href: '/about',
  },
  {
    label: 'Expertise',
    children: [
      {
        label: 'Architecture',
        subLabel: 'Concept Design, BIM, Interior Engineering',
        href: '/expertise/architecture',
      },
      {
        label: 'Engineering',
        subLabel: 'Civil, Structural, Mech/Elec & Water',
        href: '/expertise/engineering',
      },
      {
        label: 'Cost Management',
        subLabel: 'Quantity Surveying & Commercial Advisory',
        href: '/expertise/cost-management',
      },
      {
        label: 'Project Management',
        subLabel: 'Construction Supervision & QA/QC',
        href: '/expertise/project-management',
      },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Buildings', href: '/portfolio/buildings' },
      { label: 'Transportation', href: '/portfolio/transportation' },
      { label: 'Water Supply', href: '/portfolio/water' },
      { label: 'Mining & Environment', href: '/portfolio/mining' },
    ],
  },
  {
    label: 'Leadership',
    href: '/leadership',
  },
  {
    label: 'Compliance',
    href: '/compliance',
  },
];
