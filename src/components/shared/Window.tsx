import React, {CSSProperties, ReactNode} from 'react'
import styled from "styled-components"

export const Window = (
  {
    children,
    width,
    height,
    style
  }: {
    width?: number,
    height?: number,
    style?: CSSProperties,
    children: ReactNode
  }
) => {
  return (
      <WindowBorder width={width} height={height} style={style}>
        <Content  width={width} height={height}  >
          {children}
        </Content>
    </WindowBorder>

  )
}

const Content = styled.div<{width?: number, height?: number}>`
  padding: 0.3em 0.5em;
  border-radius: 0.54em;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textOnBackground};
  width: 100%;
  height: 100%;
`

const WindowBorder = styled.div<{width?: number, height?: number}>`
    padding: 0.27em 0.7em 0.7em 0.27em;
    background-color: ${props => props.theme.colors.misc};
    border-radius: 0.8em;
    margin: 0.5rem;
    ${props => props.width ? `width: ${props.width}em;`: ""}
    ${props => props.height ? `height: ${props.height}em;`: ""}
`
