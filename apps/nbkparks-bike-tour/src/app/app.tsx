// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Route2019 from '@nbkparks/biketour2019';

import { Route, Link } from 'react-router-dom';
import SimpleSidebar from './Sidebar';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Route exact path="/" render={() => "Home"} />
        <Route exact path="/2019route" render={Route2019} />
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default App;
