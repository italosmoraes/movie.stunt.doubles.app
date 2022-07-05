import styled from 'styled-components'
import './App.css'
import { DiscoveryAndMatchView } from './components/DiscoverAndMatch/DiscoveryAndMatchView'

const PageContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  height: 100%:
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Stunt Doubles Match!</h3>
      </header>
      <PageContainer>
        <DiscoveryAndMatchView />
      </PageContainer>
    </div>
  )
}

export default App
