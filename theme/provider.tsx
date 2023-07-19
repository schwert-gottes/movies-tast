import { ChakraProvider } from '@chakra-ui/react';
import theme from './style';

interface Provider {
  children: React.ReactNode;
}

const Providers = ({ children }: Provider) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
