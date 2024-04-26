import { wait } from '@/serverActions';

export default async function ServerPage() {
  const { message } = await wait(2000);
  return <h1>{message}</h1>;
}
