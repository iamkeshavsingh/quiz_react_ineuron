import AppRoutes from "./pages/app.routes";

import { Authentication } from './context/user.context';
import { LoaderProvider } from './context/loader.context';

function App() {
  return (
    <LoaderProvider>
      <Authentication>
        <AppRoutes />
      </Authentication>
    </LoaderProvider>
  );
}

export default App;
