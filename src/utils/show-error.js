export const showError = (toast, errors, defaultMsg = '出错了') => {
  if (Object.keys(errors).length) {
    Object.entries(errors).forEach(([key, descList]) => {
      descList.forEach((desc) => {
        toast.error(`${key}: ${desc}`);
      });
    });
  } else {
    toast(defaultMsg);
  }
};
