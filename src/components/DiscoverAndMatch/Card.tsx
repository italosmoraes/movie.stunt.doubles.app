import React, { useEffect, useState } from 'react'
import useStore from '../../store/StoreProvider'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 10px;
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-weight: bold;
  margin: 10px;
  width: 100px;
  height: 40px;
  background: gray;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const PositionTextField = styled.input`
  font-size: 14px;
  padding: 10px;
  background: #ae85a8;
  border: none;
  border-radius: 5px;
  height: 25px;
`

export type CardProps = { item: any }

export function Card({ item }: CardProps) {
  return (
    <CardContainer key={item.id}>
      <PositionTextField key={item.id} />
      <Button>dismiss</Button>
      <Button>match</Button>
    </CardContainer>
  )
}
