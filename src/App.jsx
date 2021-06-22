import {
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import Login from '@/components/login/index.jsx';
import Register from '@/components/register/index.jsx';
import style from './style.module.scss';

function App() {
  const cardStyle = {
    w: '400px',
    minH: '565px',
    mx: 'auto',
    p: '50px',
    boxShadow: '0 0 8px rgb(0 0 0 / 10%)',
    borderRadius: '4px',
  };

  const location = useLocation();

  const activeRed = '#ea6f5a';

  useEffect(() => {
    document.title = location.pathname === '/register' ? '注册' : '登录';
  });

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex align="flex-start" h="600px" justify="space-between">
        <Box {...cardStyle}>
          <Flex p="10px" mb="50px" align="center" justify="center" fontSize="18px">
            <NavLink to="/login" className={style.navLink} activeClassName={style.navActive}>登录</NavLink>
            <Text color={activeRed} p="10px" fontWeight={700}>·</Text>
            <NavLink to="/register" className={style.navLink} activeClassName={style.navActive}>注册</NavLink>
          </Flex>

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
