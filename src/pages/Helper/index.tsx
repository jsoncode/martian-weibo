import React, {FC} from 'react';
import styles from './index.module.less'
import Container from '@/components/Container'
import { Input } from 'antd';

const Index: FC = () => {
    return <div className={styles.page}>
        <Container
            onReset={({width, height}: any) => {
                console.log(width, height)
            }}
        >
            这是一个帮助页面
        </Container>
    </div>
}

export default Index;