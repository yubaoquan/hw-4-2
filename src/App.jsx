import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import RouteConfig from './route.js';
import style from './style.module.scss';

const cardStyle = {
  w: '400px',
  minH: '565px',
  mx: 'auto',
  p: '50px',
  boxShadow: '0 0 8px rgb(0 0 0 / 10%)',
  borderRadius: '4px',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname === '/register' ? '注册' : '登录';
  });

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex align="flex-start" h="600px" justify="space-between">
        <Box {...cardStyle}>
          <Flex p="10px" mb="50px" align="center" justify="center" fontSize="18px">
            <NavLink to="/login" className={style.navLink} activeClassName={style.navActive}>登录</NavLink>
            <Text color="#ea6f5a" p="10px" fontWeight={700}>·</Text>
            <NavLink to="/register" className={style.navLink} activeClassName={style.navActive}>注册</NavLink>
          </Flex>

          <RouteConfig />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
