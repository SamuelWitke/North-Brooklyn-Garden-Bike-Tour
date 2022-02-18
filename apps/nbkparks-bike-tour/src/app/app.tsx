// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Route2019 from '@nbkparks/biketour2019';
import { Route } from 'react-router-dom';
import SimpleSidebar from './Sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import  Biketour2022 from '@nbkparks/biketour2022'
import Home from './Home'

export function App() {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/2022route" render={Biketour2022} />
        <Route exact path="/2019route" render={Route2019} />
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default App;
