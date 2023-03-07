import { MainLayout } from '@/widgets';
import { categoriesStub } from '@/shared';
import { Topic } from './topic/topic';

export const Resources = () => {
  const topic = categoriesStub.data[0].topics[0];
  return (
    <MainLayout>
      <Topic id={topic.id} title={topic.title} description={topic.description} />
    </MainLayout>
  )
};
