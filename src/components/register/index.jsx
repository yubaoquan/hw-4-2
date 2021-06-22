import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';

import {
  AiFillLock,
  AiFillWechat,
  AiOutlineQq,
  GoPerson,
  ImMobile2,
  TextDivider,
  bottomInputStyle,
  commonSubmitBtnStyle,
  middleInputStyle,
  myGray,
  snsIconStyle,
  topInputStyle,
  inputHeight,
} from '@/components/common-style.js';

import request from '@/utils/request.js';
import useToast from '@/utils/toast.js';

const protocolLink = 'https://baidu.com';
const privacyLink = 'https://baidu.com';

const submitBtnStyle = {
  bgColor: '#42c02e',
  _hover: { bgColor: '#3db922' },
};

const protocolLinkStyle = {
  color: '#3194d0',
  textDecoration: 'none',
  _hover: { textDecoration: 'none' },
};

export default function Register() {
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const { data } = await request.post('/users', {
        user: {
          username: 'Jac2o1b',
          email: 'ja4k3@jake.jake',
          password: 'jakejake',
        },
      });
      console.info(data);
      toast.success('注册成功');
    } catch (e) {
      console.error(e);
      toast.error('注册失败');
      console.info(e.response?.data);
    }
  };

  const phoneValid = true;

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validCodeBtnStyle = {
    w: '100px',
    h: '36px',
    color: '#fff',
    bgColor: '#42c02e',
    fontSize: '13px',
    opacity: phoneValid ? 1 : 0.5,
    cursor: phoneValid ? 'pointer' : 'text',
    fontWeight: 'normal',
    borderRadius: '20px',
    _hover: {
      bgColor: '#42c02e',
    },
  };

  return (
    <Box>
      <form>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={inputHeight}>
              <Icon as={GoPerson} color={myGray} />
            </InputLeftElement>
            <Input placeholder="你的昵称" {...topInputStyle} />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={inputHeight}>
              <Icon as={ImMobile2} color={myGray} />
            </InputLeftElement>
            <Input placeholder="手机号" {...middleInputStyle} value={phoneNumber} onInput={handlePhoneNumberChange} />
          </InputGroup>
        </FormControl>

        {phoneNumber && (
        <InputGroup>
          <InputLeftElement pointerEvents="none" h={inputHeight}>
            <Icon as={ImMobile2} color={myGray} />
          </InputLeftElement>
          <Input placeholder="手机验证码" {...middleInputStyle} />
          <InputRightElement w="100px" h={inputHeight} pr="10px">
            <Button {...validCodeBtnStyle}>发送验证码</Button>
          </InputRightElement>
        </InputGroup>
        )}

        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h={inputHeight}>
              <Icon as={AiFillLock} color={myGray} />
            </InputLeftElement>
            <Input placeholder="设置密码" borderTopRadius="0" {...bottomInputStyle} />
          </InputGroup>
        </FormControl>

        <Button {...submitBtnStyle} {...commonSubmitBtnStyle} onClick={handleSubmit}>注册</Button>
      </form>

      <Text my="10px" textAlign="center" fontSize="12px" lineHeight="20px" color={myGray}>
        点击 “注册” 即表示您同意并愿意遵守简书
        <br />
        <Link href={protocolLink} {...protocolLinkStyle}>用户协议</Link>
        {' '}
        和
        {' '}
        <Link href={privacyLink} {...protocolLinkStyle}>隐私政策</Link>
        。
      </Text>
      <TextDivider title="社交帐号直接注册" />
      <Flex justify="center" py="10px">
        <Icon as={AiFillWechat} {...snsIconStyle} color="#00bb29" />
        <Icon as={AiOutlineQq} {...snsIconStyle} color="#498ad5" />
      </Flex>
    </Box>
  );
}
