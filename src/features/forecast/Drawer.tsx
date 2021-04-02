import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

import styleSheet from './drawer.module.css';
import DragIcon from '../../assets/images/drag-icon.svg';
import { Link } from 'react-router-dom';

type Props = {
  children?: ReactNode;
}

export const Drawer = ({ children }: Props) => {
  const history = useHistory();
  
  return (
    <>
      <motion.div
        className={styleSheet.drawer}
        variants={animation}
        initial='hide'
        animate='show'
        exit='hide'
      >
        <div className={styleSheet.container}>
          {children}
        </div>
        <div className={styleSheet.dragDrawer}>
          <Link to='/'>
            <img src={DragIcon} alt='Drag icon' />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

const animation = {
  show: {
    x: '-50px',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  hide: {
    x: 'calc(-100vw + 40px)',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
