import type { Route } from "./+types/landing";
import { useQueryClient } from '@tanstack/react-query';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader() {
  // Add any data loading logic here
  return null;
}

export default function Landing() {
  const queryClient = useQueryClient();
  
  // You can now use React Query hooks here
  // const { data } = useQuery({
  //   queryKey: ['example'],
  //   queryFn: () => fetch('/api/example').then(res => res.json())
  // });

  return <Welcome />;
}
