import React from 'react';
import { useRouter } from 'next/router';
import { SpeedInsights } from '@vercel/speed-insights/react';
const NotFoundPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/');
  });
  return <SpeedInsights route={router.pathname} />;
};
export default NotFoundPage;
