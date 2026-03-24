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
  useColorModeValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="sticky">
      <Flex
        bg={useColorModeValue('brand.navy', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'90px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('brand.gold', 'gray.900')}
        alignItems={'center'}
      >
        <Container maxW="container.xl" display="flex" alignItems="center" position="relative">
          {/* Logo — always left */}
          <Link
            as={RouterLink}
            to="/"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: 'none' }}
            zIndex={1}
          >
            <Text
              fontFamily="'Azonix', sans-serif"
              fontWeight={400}
              fontSize="24px"
              lineHeight="20px"
              letterSpacing="0px"
              sx={{
                background: 'linear-gradient(90deg, #b8860b 0%, #ffd700 30%, #fffacd 50%, #ffd700 70%, #b8860b 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'goldShine 3s linear infinite',
              }}
            >
              SADEL
            </Text>
          </Link>

          {/* Desktop nav — absolutely centered */}
          <Box
            display={{ base: 'none', md: 'flex' }}
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            zIndex={1}
          >
            <Box
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="full"
              px={3}
              py={2}
            >
              <DesktopNav />
            </Box>
          </Box>

          {/* Right side: CTA (desktop) + toggle (mobile) */}
          <Stack direction="row" spacing={3} alignItems="center" ml="auto" zIndex={1}>
            <Button
              as={RouterLink}
              to="/contact"
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'brand.navy'}
              bg={'brand.gold'}
              borderRadius="full"
              textTransform="capitalize"
              _hover={{
                bg: 'yellow.500',
              }}
            >
              Get in Touch
            </Button>

            {/* Mobile hamburger — right side */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <Icon viewBox="0 0 24 24" w={6} h={6} color="white">
                    <path
                      fill="currentColor"
                      d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
                    />
                  </Icon>
                ) : (
                  <Icon viewBox="0 0 24 24" w={6} h={6} color="white">
                    <rect fill="currentColor" x="3" y="6" width="18" height="2" rx="1" />
                    <rect fill="currentColor" x="6" y="11" width="12" height="2" rx="1" />
                    <rect fill="currentColor" x="3" y="16" width="18" height="2" rx="1" />
                  </Icon>
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
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
  const location = useLocation();

  const isItemActive = (navItem: NavItem) => {
    if (navItem.href === '/') return location.pathname === '/';
    if (navItem.href && location.pathname.startsWith(navItem.href)) return true;
    if (navItem.children) return navItem.children.some((child) => child.href && location.pathname.startsWith(child.href));
    return false;
  };

  return (
    <Stack direction="row" spacing={1} align="center">
      {NAV_ITEMS.map((navItem) => {
        const active = isItemActive(navItem);
        return (
          <Box key={navItem.label} position="relative" role="group">
            {/* Trigger */}
            <Link
              as={RouterLink}
              to={navItem.href ?? '#'}
              display="flex"
              alignItems="center"
              gap={1}
              px={4}
              py={2}
              fontSize="xs"
              fontWeight={700}
              borderRadius="full"
              whiteSpace="nowrap"
              textTransform="capitalize"
              letterSpacing="0.5px"
              color={active ? 'brand.navy' : linkColor}
              bg={active ? 'brand.gold' : 'transparent'}
              transition="all 0.2s"
              _hover={{
                textDecoration: 'none',
                color: active ? 'brand.navy' : linkHoverColor,
                bg: active ? 'brand.gold' : 'whiteAlpha.200',
              }}
            >
              {navItem.label}
              {navItem.children && (
                <Icon
                  as={ChevronDownIcon}
                  w={3}
                  h={3}
                  ml={0.5}
                  transition="transform 0.25s ease"
                  sx={{ '[role=group]:hover &': { transform: 'rotate(180deg)' } }}
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
  const isActive = href && location.pathname.startsWith(href);

  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      role="group"
      display="block"
      px={4}
      py={3}
      borderRadius="lg"
      bg={isActive ? 'whiteAlpha.200' : 'transparent'}
      borderLeft={isActive ? '3px solid' : '3px solid transparent'}
      borderColor={isActive ? 'brand.gold' : 'transparent'}
      _hover={{
        bg: 'whiteAlpha.100',
        borderColor: 'brand.gold',
        textDecoration: 'none',
      }}
      transition="all 0.2s"
    >
      <Stack direction="row" align="center" justify="space-between">
        <Box>
          <Text
            fontSize="sm"
            fontWeight={isActive ? 700 : 600}
            color={isActive ? 'brand.gold' : 'whiteAlpha.900'}
            textTransform="capitalize"
            letterSpacing="0.5px"
            transition="color 0.2s"
            _groupHover={{ color: 'brand.gold' }}
          >
            {label}
          </Text>
          {subLabel && (
            <Text fontSize="xs" color="whiteAlpha.500" mt={0.5} fontWeight={400}>
              {subLabel}
            </Text>
          )}
        </Box>
        <Flex
          transition="all 0.25s ease"
          transform="translateX(-6px)"
          opacity={0}
          _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
          align="center"
        >
          <Icon color="brand.gold" w={4} h={4} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Box
      bg="brand.navy"
      display={{ md: 'none' }}
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 8px 32px rgba(0,0,0,0.45)"
    >
      <Stack spacing={0} px={6} py={4}>
        {NAV_ITEMS.map((navItem, i) => (
          <Box key={navItem.label}>
            {i > 0 && <Box h="1px" bg="whiteAlpha.100" />}
            <MobileNavItem {...navItem} />
          </Box>
        ))}
      </Stack>

      {/* CTA */}
      <Box px={6} pb={6} pt={2}>
        <Button
          as={RouterLink}
          to="/contact"
          w="full"
          fontSize="sm"
          fontWeight={700}
          letterSpacing="1px"
          textTransform="uppercase"
          color="brand.navy"
          bg="brand.gold"
          borderRadius="none"
          py={6}
          _hover={{ bg: 'yellow.400' }}
        >
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();

  const isItemActive = () => {
    if (href === '/') return location.pathname === '/';
    if (href && location.pathname.startsWith(href)) return true;
    if (children) return children.some((child) => child.href && location.pathname.startsWith(child.href));
    return false;
  };

  const isActive = isItemActive();

  return (
    <Stack spacing={0}>
      <Flex
        py={4}
        as={children ? undefined : RouterLink}
        {...(!children ? { to: href ?? '#' } : { onClick: onToggle })}
        justify="space-between"
        align="center"
        cursor="pointer"
        _hover={{ textDecoration: 'none' }}
      >
        <Text
          fontSize="xs"
          fontWeight={700}
          letterSpacing="2px"
          textTransform="capitalize"
          color={isActive ? 'brand.gold' : 'whiteAlpha.800'}
          transition="color 0.2s"
          _hover={{ color: 'brand.gold' }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            w={5}
            h={5}
            color={isActive ? 'brand.gold' : 'whiteAlpha.500'}
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
          borderColor="brand.gold"
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
                  py={2}
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="capitalize"
                  fontWeight={isChildActive ? 700 : 500}
                  color={isChildActive ? 'brand.gold' : 'whiteAlpha.600'}
                  _hover={{ color: 'brand.gold', textDecoration: 'none' }}
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
