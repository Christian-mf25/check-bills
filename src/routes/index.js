import express from 'express';

import billsRoutes from './bills.routes';

const routes = (route) => {
  route.use(express.json());

  billsRoutes(route);
};

export default routes;
