import React from 'react';
import Box from '@/app/components/ui/Box/Box';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Box className='w-[212px] h-full'>
      <ul>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <Link href={'/user'}>User</Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
