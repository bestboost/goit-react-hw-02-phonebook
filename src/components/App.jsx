import { Box } from '../components/Box';
import Phonebook from 'components/Phonebook/Phonebook'

export const App = () => {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook/>
    </Box>
  );
};
