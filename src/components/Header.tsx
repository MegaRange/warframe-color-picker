import React, {FC} from "react";
import styled from "styled-components";
import layoutIcon from "../assets/layoutIcon.svg"
import tipOfADay from "../assets/tipOfADay.svg"

export const Header : FC = () => {
  return (
    <StyledHeader>
      <Layout/>
      <TipOfADay/>
      <TipWrapper>
        Join our Discord at: discord.gg/WWBYuY3! This place is not only limited to Warframe, so feel free to hop in even if you’re on a break. Our community is still growing, and we’re actively looking for new people. Hope to see you around!
      </TipWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  width: fit-content;
`

const Layout = styled.img.attrs((props) => ({src: layoutIcon}))`
  width: 3.3em;
  margin: 0.7em 0.4em auto auto;
`

const TipOfADay = styled.img.attrs((props) => ({src: tipOfADay}))`
  width: 14.7em;
`

const TipWrapper = styled.div`
  font-size: 1.3em;
  margin: 0.35em auto auto 0.35em;
  width: 39em;
  color: ${props => props.theme.colors.secondary};
  line-height: 1;
`