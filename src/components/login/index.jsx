import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from '@chakra-ui/react';

import {
  AiFillLock,
  AiFillWechat,
  AiOutlineQq,
  AiOutlineWeibo,
  GoPerson,
  TextDivider,
  bottomInputStyle,
  commonSubmitBtnStyle,
  myGray,
  snsIconStyle,
  topInputStyle,
  inputHeight,
} from '@/components/common-style.js';

import request from '@/utils/request.js';
import useToast from '@/utils/toast.js';

export default function Login() {
  const toast = useToast();

  const submitBtnStyle = {
    bgColor: '#3194d0',
    _hover: { bgColor: '#187cb7' },
  };

  async function handleSubmit() {
    try {
      const { data } = await request.post('/users/login', {
        user: {
          username: 'Jacob',
          email: 'jake@jake.jake',
        },
      });
      console.info(data);
      toast.success('登录成功');
    } catch (e) {
      console.error(e);
      console.info(e?.response?.data);
      toast.error('登录失败');
    }
  }

  return (
    <Box>
      <form>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={inputHeight}>
              <Icon as={GoPerson} color={myGray} />
            </InputLeftElement>
            <Input placeholder="手机号或邮箱" {...topInputStyle} />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={inputHeight}>
              <Icon as={AiFillLock} color={myGray} />
            </InputLeftElement>
            <Input placeholder="密码" borderTopRadius="0" {...bottomInputStyle} />
          </InputGroup>
        </FormControl>

        <Flex align="center" justify="space-between" my="15px">
          <Checkbox defaultIsChecked size="md">
            <Text color={myGray} fontSize="15px">记住我</Text>
          </Checkbox>
          <Link href="https://baidu.com" fontSize="14px" color="#999" _hover={{ color: '#333' }}>登录遇到问题?</Link>
        </Flex>
        <Button {...submitBtnStyle} {...commonSubmitBtnStyle} onClick={handleSubmit}>登录</Button>
      </form>
      <TextDivider title="社交帐号登录" />
      <Flex justify="center" py="10px">
        <Icon as={AiOutlineWeibo} {...snsIconStyle} color="#e05244" />
        <Icon as={AiFillWechat} {...snsIconStyle} color="#00bb29" />
        <Icon as={AiOutlineQq} {...snsIconStyle} color="#498ad5" />
      </Flex>
    </Box>
  );
}
