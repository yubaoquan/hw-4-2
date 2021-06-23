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
  Tooltip,
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
  inputHeight,
  myGray,
  snsIconStyle,
  topInputStyle,
} from '@/components/common-style.js';

import { useFormik } from 'formik';
import { useState } from 'react';
import { showError } from '@/utils/show-error.js';
import request from '@/utils/request.js';
import useToast from '@/utils/toast.js';
import * as Yup from 'yup';

export default function Login() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function requestLogin({ email, password }) {
    try {
      if (isLoading) return;
      setIsLoading(true);
      const { data } = await request.post('/users/login', {
        user: { email, password },
      });
      console.info(data);
      toast.success('登录成功');
    } catch (e) {
      console.info(e?.response?.data);
      const { errors = {} } = e.response?.data;
      showError(toast, errors, '登录失败');
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().trim().required('请输入手机号或邮箱'),
      password: Yup.string().required('请输入密码'),
    }),
    onSubmit(values) {
      requestLogin(values);
    },
  });

  const submitBtnStyle = {
    bgColor: '#3194d0',
    _hover: { bgColor: '#187cb7' },
  };

  const emailError = formik.touched.email && formik.errors.email;
  const passwordError = formik.touched.password && formik.errors.password;

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
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
                <Icon as={GoPerson} color={myGray} />
              </InputLeftElement>
              <Input
                placeholder="手机号或邮箱"
                {...topInputStyle}
                {...formik.getFieldProps('email')}
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

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
                placeholder="密码"
                {...bottomInputStyle}
                {...formik.getFieldProps('password')}
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <Flex align="center" justify="space-between" my="15px">
          <Checkbox defaultIsChecked size="md">
            <Text color={myGray} fontSize="15px">记住我</Text>
          </Checkbox>
          <Link href="https://baidu.com" fontSize="14px" color="#999" _hover={{ color: '#333' }}>登录遇到问题?</Link>
        </Flex>
        <Button
          {...submitBtnStyle}
          {...commonSubmitBtnStyle}
          isLoading={isLoading}
          loadingText="正在登录..."
          onClick={formik.handleSubmit}
        >
          登录
        </Button>
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
