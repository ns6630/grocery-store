// eslint-disable-next-line @conarti/feature-sliced/public-api
import "dayjs/locale/ru";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  AntConfigProvider,
  QueryClientProvider,
  RouterProvider,
} from "./providers";

export default function App() {
  return (
    <QueryClientProvider>
      <AntConfigProvider>
        <RouterProvider />
        <ReactQueryDevtools initialIsOpen={false} />
      </AntConfigProvider>
    </QueryClientProvider>
  );
}
