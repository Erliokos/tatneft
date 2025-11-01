import { media } from "globalStyle"
import styled from "styled-components"

export const Container = styled.div`
  padding: ${({ theme }) => theme.space[5]};
  background-color: ${({ theme }) => theme.colors.secondary[200]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`
export const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.space[1]};
  min-width: 240;
  ${media.md`
    flex: 0;
  `}

`
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  ${media.md`
    flex-direction: column;
  `}
`

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.black};
`

export const ErrorSpan = styled(Span)`
  color: ${({ theme }) => theme.colors.error};
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.colors.black};
`

export const CityContainer = styled.div`
  flex: 1;
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  ${media.md`
    flex: 0;
  `}
`

export const PeriodButton = styled.button<{ $isSelect: boolean }>`
  padding: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.space[1]};
  background-color: ${({ $isSelect: active, theme }) =>
    active ? theme.colors.primary[400] : theme.colors.white};
  color: ${({ $isSelect: active, theme }) =>
    active ? theme.colors.primary[100] : theme.colors.black};
  cursor: pointer;
`
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary[200]};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  ${media.md`
    flex-direction: row;
  `}
`
export const ChartContainer = styled.section`
  flex: 1;
`
export const PeriodContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${({ theme }) => theme.space[2]};
  ${media.md`
    display: grid;
  `}
`
export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 360px;
`
