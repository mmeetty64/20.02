import React, { FC } from 'react'
import { Header } from '../Header/Header'

interface ILayout{
    children: React.ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
  return (
    <>
    <Header/>
    <div style={{padding: "0 10rem 0 10rem"}}>{children}</div>
    </>
  )
}
