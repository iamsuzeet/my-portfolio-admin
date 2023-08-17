'use client';

import withAuthCheck from '@/app/hoc/withAuthCheck';
import React from 'react';

const User = () => {
  return <div>User</div>;
};

export default withAuthCheck(User, 'protected');
