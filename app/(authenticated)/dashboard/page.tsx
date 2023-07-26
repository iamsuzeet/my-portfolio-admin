'use client';

import withAuthCheck from '@/app/hoc/withAuthCheck';
import React from 'react';

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default withAuthCheck(Dashboard, 'protected');
