import { Main } from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incomeCategories, incomeGet } from 'redux/income/income-operations';

const Income = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      dispatch(incomeCategories());
      dispatch(incomeGet());
    }
  }, [dispatch, isLogin]);
  return (
    <>
      <Main />
    </>
  );
};

export default Income;
