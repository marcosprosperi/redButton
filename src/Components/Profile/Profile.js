import React from 'react'
import CanvasDraw from "react-canvas-draw"
import styles from './Profile.module.css'
import { Typography } from 'antd';
import { DislikeTwoTone, LikeTwoTone } from '@ant-design/icons'

const { Title } = Typography;

const Profile = ({name, avatar, isLocked}) => {

    return (
        <div className={styles.profile} >
            <Title level={3}>{name}</Title>
            <CanvasDraw className={styles.avatarProfile} disabled hideGrid saveData={avatar} canvasWidth={150} canvasHeight={200} />
            { isLocked ? <LikeTwoTone className={styles.like} twoToneColor="#52c41a" /> : <DislikeTwoTone className={styles.dislike} twoToneColor="#eb2f96" /> }
        </div>
    )
}

export default Profile