import { Flex } from 'antd';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Flex gap={10} vertical={isMobile}>

      </Flex>
    </>
  )
}

export default App;