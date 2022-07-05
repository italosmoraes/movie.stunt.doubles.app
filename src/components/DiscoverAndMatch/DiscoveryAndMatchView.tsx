import useStore from '../../store/StoreProvider'
import styled from 'styled-components'
import { CardsList } from './CardsList'

type Props = {}

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
`

export const DiscoveryAndMatchView = ({}: Props) => {
  const { doubles } = useStore()

  return (
    <ViewContainer>
      <h3>Discover and Match</h3>
      <CardsList items={doubles} />
    </ViewContainer>
  )
}
