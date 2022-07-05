import styled from 'styled-components'
import { Card } from './Card'

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
`

export type CardsListProps = {
  items: any[]
}

export function CardsList({ items }: CardsListProps) {
  return (
    <CardsContainer>
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </CardsContainer>
  )
}
