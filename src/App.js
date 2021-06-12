import AppRoutes from "./pages/app.routes";

import { Authentication } from './context/user.context';

function App() {
  return (
    <Authentication>
      <AppRoutes />
    </Authentication>
  );
}

export default App;
