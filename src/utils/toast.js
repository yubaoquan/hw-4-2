import { useToast } from '@chakra-ui/react';

export default function useMyHook() {
  const toast = useToast();

  function success(msg) {
    toast({
      description: msg,
      position: 'top',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }

  function error(msg) {
    toast({
      description: msg,
      position: 'top',
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  }

  return {
    success,
    error,
  };
}
