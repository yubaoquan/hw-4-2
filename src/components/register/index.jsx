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
  Tooltip,
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
import { showError } from '@/utils/show-error.js';
import { useFormik } from 'formik';
import useToast from '@/utils/toast.js';
import * as Yup from 'yup';

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
  const [isLoading, setIsLoading] = useState(false);

  const requestRegister = async ({ username, email, password }) => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      const { data } = await request.post('/users', {
        user: {
          username,
          email,
          password,
        },
      });
      console.info(data);
      toast.success('注册成功');
    } catch (e) {
      console.info(e.response?.data);
      showError(toast, e.response?.data?.errors, '注册失败');
    } finally {
      setIsLoading(false);
    }
  };

  const MIN_USERNAME_LEN = 6;
  const MAX_USERNAME_LEN = 30;
  const MIN_PASSWORD_LEN = 8;

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required('请输入昵称')
        .min(MIN_USERNAME_LEN, `用户名最小${MIN_USERNAME_LEN}个字符`)
        .max(MAX_USERNAME_LEN, `用户名最大${MAX_USERNAME_LEN}个字符`),
      email: Yup.string()
        .trim()
        .required('请输入邮箱地址')
        .email('邮箱无效'),
      password: Yup.string()
        .min(MIN_PASSWORD_LEN, `密码最短${MIN_PASSWORD_LEN}位`)
        .required('请输入密码')
        .test({
          name: 'password',
          message: '密码不能全是数字',
          test(pwd) {
            return !/^\d*$/g.test(pwd);
          },
        }),
    }),
    onSubmit(values) {
      requestRegister(values);
    },
  });

  const usernameError = formik.touched.username && formik.errors.username;
  const emailError = formik.touched.email && formik.errors.email;
  const passwordError = formik.touched.password && formik.errors.password;

  const validCodeBtnStyle = {
    w: '100px',
    h: '36px',
    color: '#fff',
    bgColor: '#42c02e',
    fontSize: '13px',
    opacity: !emailError ? 1 : 0.5,
    cursor: !emailError ? 'pointer' : 'text',
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
          <Tooltip
            hasArrow
            arrowSize={8}
            placement="right"
            label={usernameError}
            isOpen={!!usernameError}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" h={inputHeight}>
                <Icon as={GoPerson} color={myGray} />
              </InputLeftElement>
              <Input
                placeholder="你的昵称"
                {...topInputStyle}
                {...formik.getFieldProps('username')}
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <FormControl isRequired>
          <Tooltip
            hasArrow
            arrowSize={8}
            placement="right"
            label={emailError}
            isOpen={!!emailError}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" h={inputHeight}>
                <Icon as={ImMobile2} color={myGray} />
              </InputLeftElement>
              <Input
                placeholder="手机号或邮箱"
                {...middleInputStyle}
                {...formik.getFieldProps('email')}
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        {formik.values.email && (
        <InputGroup>
          <InputLeftElement pointerEvents="none" h={inputHeight}>
            <Icon as={ImMobile2} color={myGray} />
          </InputLeftElement>
          <Input
            placeholder="手机验证码"
            {...middleInputStyle}
          />
          <InputRightElement w="100px" h={inputHeight} pr="10px">
            <Button {...validCodeBtnStyle}>发送验证码</Button>
          </InputRightElement>
        </InputGroup>
        )}

        <FormControl isRequired>
          <Tooltip
            hasArrow
            arrowSize={8}
            placement="right"
            label={passwordError}
            isOpen={!!passwordError}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" h={inputHeight}>
                <Icon as={AiFillLock} color={myGray} />
              </InputLeftElement>
              <Input
                placeholder="设置密码"
                type="password"
                {...bottomInputStyle}
                {...formik.getFieldProps('password')}
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <Button
          {...submitBtnStyle}
          {...commonSubmitBtnStyle}
          onClick={formik.handleSubmit}
          isLoading={isLoading}
          loadingText="正在注册"
        >
          注册
        </Button>
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
