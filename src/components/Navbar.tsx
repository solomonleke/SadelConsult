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
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/sadelLogo.png';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="sticky" w="full">
      <Flex
        bg="brand.navy"
        color="white"
        minH={'80px'}
        py={{ base: 3 }}
        px={{ base: 4, md: 10 }}
        align={'center'}
        position="relative"
      >
        {/* LOGO SECTION - Left */}
        <Flex justify="start" flex={1}>
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
            display="flex"
            alignItems="center"
          >
            <Image
              src={logo}
              alt="SADEL"
              h={{ base: "40px", md: "50px" }}
              objectFit="contain"
            />
          </Link>
        </Flex>

        {/* DESKTOP NAV - Center (Absolutely Positioned) */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          align="center"
          zIndex={1}
        >
          <Box
            bg="whiteAlpha.100"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="full"
            px={2}
            py={2}
            minW="max-content"
          >
            <DesktopNav />
          </Box>
        </Flex>

        {/* RIGHT SECTION - Mobile Toggle & CTA */}
        <Flex align="center" justify="flex-end" flex={1} gap={4}>
          <Button
            as={RouterLink}
            to="/contact"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'xs'}
            fontWeight={600}
            color={'white'}
            bg={'brand.teal'}
            px={8}
            py={6}
            borderRadius="full"
            _hover={{
              bg: 'white',
              color: 'brand.navy',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 191, 165, 0.3)',
            }}
            transition="all 0.3s ease"
            textTransform="capitalize"
            letterSpacing="1px"
          >
            Get in Touch
          </Button>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color="brand.teal"
            _hover={{ bg: 'whiteAlpha.100' }}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const location = useLocation();

  return (
    <Stack direction={'row'} spacing={1}>
      {NAV_ITEMS.map((navItem) => {
        const isActive = navItem.href === '/'
          ? location.pathname === '/'
          : navItem.href && location.pathname.startsWith(navItem.href);

        return (
          <Box key={navItem.label} role={'group'} position="relative">
            <Link
              as={RouterLink}
              to={navItem.href ?? '#'}
              p={2}
              px={5}
              fontSize={'sm'}
              fontWeight={isActive ? 700 : 500}
              color={isActive ? 'brand.navy' : 'whiteAlpha.900'}
              bg={isActive ? 'brand.teal' : 'transparent'}
              _hover={{
                textDecoration: 'none',
                color: isActive ? 'brand.navy' : 'brand.teal',
                bg: isActive ? 'brand.teal' : 'whiteAlpha.100',
              }}
              borderRadius="full"
              transition="all 0.2s ease"
              display="flex"
              alignItems="center"
              gap={1}
              textTransform="capitalize"
              letterSpacing="0.5px"
              whiteSpace="nowrap"
            >
              {navItem.label}
              {navItem.children && (
                <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isActive ? 'rotate(0deg)' : 'rotate(0deg)'}
                  w={4}
                  h={4}
                />
              )}
            </Link>

            {/* Absolutely-positioned dropdown — never affects layout */}
            {navItem.children && (
              <Box
                position="absolute"
                top="100%"
                left="50%"
                zIndex={2000}
                minW="260px"
                pt={2} // Creates a visual gap while maintaining hover state (the "bridge")
                opacity={0}
                visibility="hidden"
                pointerEvents="none"
                sx={{
                  transform: 'translateX(-50%) translateY(-6px)',
                  transition: 'opacity 0.2s ease, visibility 0.2s, transform 0.2s ease',
                  transitionDelay: '0.1s', // Grace period when mouse leaves
                  '[role=group]:hover &': {
                    opacity: 1,
                    visibility: 'visible',
                    pointerEvents: 'auto',
                    transform: 'translateX(-50%) translateY(0)',
                    transitionDelay: '0s', // Show instantly on hover
                  },
                }}
              >
                <Box
                  bg="brand.navy"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderRadius="xl"
                  boxShadow="0 20px 60px rgba(0,0,0,0.55)"
                  p={2}
                  position="relative"
                >
                  {/* Caret arrow */}
                  <Box
                    position="absolute"
                    top="-5px"
                    left="50%"
                    w="10px"
                    h="10px"
                    bg="brand.navy"
                    borderTop="1px solid"
                    borderLeft="1px solid"
                    borderColor="whiteAlpha.200"
                    sx={{ transform: 'translateX(-50%) rotate(45deg)' }}
                  />
                  <Stack spacing={0.5}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const location = useLocation();
  const isActive = href && location.pathname === href;

  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      role={'group'}
      display={'block'}
      p={3}
      borderRadius={'lg'}
      _hover={{ bg: 'whiteAlpha.100' }}
      position="relative"
      transition="all 0.2s"
    >
      <Stack direction={'row'} align={'center'}>
        {/* Active Indicator Bar */}
        <Box
          position="absolute"
          left="2"
          top="50%"
          transform="translateY(-50%)"
          w="3px"
          h={isActive ? "60%" : "0"}
          bg="brand.teal"
          borderRadius="full"
          transition="all 0.3s ease"
          opacity={isActive ? 1 : 0}
          _groupHover={{ h: "60%", opacity: 1 }}
        />

        <Box pl={isActive ? 4 : 2} transition="all 0.3s">
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.teal' }}
            fontWeight={isActive ? 700 : 500}
            color={isActive ? 'brand.teal' : 'white'}
            fontSize="sm"
            textTransform="capitalize"
          >
            {label}
          </Text>
          <Text fontSize={'xs'} color="whiteAlpha.600">
            {subLabel}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <Stack
      bg="brand.navy"
      p={6}
      display={{ md: 'none' }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} onToggle={onToggle} {...navItem} />
      ))}
      <Button
        as={RouterLink}
        to="/contact"
        onClick={onToggle}
        w="full"
        bg="brand.teal"
        color="white"
        py={6}
        fontSize="sm"
        _hover={{ bg: 'white', color: 'brand.navy' }}
        textTransform="capitalize"
      >
        Get In Touch
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onToggle }: NavItem & { onToggle: () => void }) => {
  const { isOpen, onToggle: onChildToggle } = useDisclosure();
  const location = useLocation();
  const isActive = href === '/'
    ? location.pathname === '/'
    : href && location.pathname.startsWith(href);

  const handleLinkClick = (e: React.MouseEvent) => {
  if (children) {
    e.preventDefault(); // stop navigation for dropdowns
    onChildToggle();
  } else {
    onToggle(); // close mobile menu AND allow navigation
  }
};

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouterLink}
        to={href ?? '#'}
        onClick={handleLinkClick}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontSize="xs"
          fontWeight={700}
          letterSpacing="2px"
          textTransform="capitalize"
          color={isActive ? 'brand.teal' : 'whiteAlpha.800'}
          transition="color 0.2s"
          _hover={{ color: 'brand.teal' }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            w={5}
            h={5}
            color={isActive ? 'brand.teal' : 'whiteAlpha.500'}
            transition="transform 0.25s ease"
            transform={isOpen ? 'rotate(180deg)' : ''}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          pl={4}
          pb={3}
          borderLeft="2px solid"
          borderColor="brand.teal"
          spacing={0}
          ml={1}
        >
          {children &&
            children.map((child) => {
              const isChildActive = child.href && location.pathname.startsWith(child.href);
              return (
                <Link
                  key={child.label}
                  as={RouterLink}
                  to={child.href ?? '#'}
                  onClick={onToggle}
                  py={2}
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="capitalize"
                  fontWeight={isChildActive ? 700 : 500}
                  color={isChildActive ? 'brand.teal' : 'whiteAlpha.600'}
                  _hover={{ color: 'brand.teal', textDecoration: 'none' }}
                  transition="color 0.2s"
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
        label: 'Quantity Surveying',
        subLabel: 'Cost Estimation, BOQ, Procurement & Cost Control',
        href: '/expertise/quantity-surveying',
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
      { label: 'All', href: '/portfolio' },
      { label: 'Buildings', href: '/portfolio/buildings' },
      { label: 'Transportation', href: '/portfolio/transportation' },
      { label: 'Water Supply', href: '/portfolio/water' },
      { label: 'Mining & Environment', href: '/portfolio/mining' },
      { label: 'Health', href: '/portfolio/health' },
      { label: 'Industrial', href: '/portfolio/industrial' },
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
