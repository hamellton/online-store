import Link from 'next/link'
import Layout from '../src/components/Layout'
import styled from 'styled-components'
import React, {useEffect} from "react";

const Title = styled.h1`
  color: red;
`
const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`
const MenuLi = styled.li`
  min-width: 100px;
`

const dataMenu: IMenuData[] = [
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Blog',
        url: '/blog'
    }
]

interface IMenuData {
    title: string;
    url: string;
}

const IndexPage = ({dataMenu}: { dataMenu: IMenuData[] }) => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <Title>Title red</Title>
            <Menu>
                {dataMenu.map((el, index) => {
                    return (
                        <MenuLi key={`${index}__${el.title}`}>
                            <Link href={el.url}>{el.title}</Link>
                        </MenuLi>
                    )
                })}
            </Menu>
        </Layout>
    )
}

export default IndexPage

export async function getStaticProps() {
    return {
        props: {
            dataMenu,
        }
    };
}