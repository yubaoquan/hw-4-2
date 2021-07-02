import { Box } from '@chakra-ui/react';

export default () => {
  const arr = Array(300).fill(0).map((t, i) => i + 1);

  return (
    arr.map((w) => (
      <div key={ w }>
        <div>{ `this width is ${w}` }</div>
        <Box w={ w } bgColor="skyblue" h="20px" />
      </div>
    ))
  );
};
