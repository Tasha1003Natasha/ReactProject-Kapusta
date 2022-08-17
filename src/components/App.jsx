import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
// import PageAuth from 'Page/PageAuth';
import PageNotFound from 'Page/PageNotFound';
import Transaction from '../Page/Transaction';
import Expenses from '../Page/Expenses';
import Income from '../Page/Income';
import Report from '../Page/Report';
import HomePage from '../Page/Homepage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="" element={<Transaction />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
        <Route path="report" element={<Report />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
