import { PropsWithChildren } from 'react';
import WrapperLayout from '@/app/components/ui/Layout/WrapperLayout';
import FlexLayout from '@/app/components/ui/Layout/FlexLayout';
import Sidebar from '@/app/components/ui/Sidebar/Sidebar';
import BaseLayout from '@/app/components/ui/Layout/BaseLayout';
import Header from '@/app/components/ui/Header/Header';

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <WrapperLayout>
      <FlexLayout>
        <Sidebar />
        <BaseLayout>
          <Header />
          {children}
        </BaseLayout>
      </FlexLayout>
    </WrapperLayout>
  );
}
