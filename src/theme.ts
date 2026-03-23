import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Public Sans', sans-serif`,
  },
  colors: {
    brand: {
      navy: '#002147', // Deep Navy Blue
      steel: '#708090', // Steel Grey
      gold: '#C5A021', // Gold accent
      orange: '#FF8C00', // Safety Orange
      white: '#FFFFFF',
      offWhite: '#F8F9FA',
    },
    navy: {
      50: '#e1e8f0',
      100: '#b8c6d6',
      200: '#8da3bc',
      300: '#6181a4',
      400: '#385f8c',
      500: '#1e4572',
      600: '#16365a',
      700: '#0d2742',
      800: '#06172a',
      900: '#000814',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0', // Architectural precision
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorScheme === 'brand' ? 'brand.navy' : undefined,
          color: 'white',
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.gold' : undefined,
          },
        }),
        outline: {
          borderColor: 'brand.navy',
          color: 'brand.navy',
          _hover: {
            bg: 'brand.navy',
            color: 'white',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        color: 'brand.navy',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.700',
        lineHeight: '1.7',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.white',
      },
    },
  },
});

export default theme;
