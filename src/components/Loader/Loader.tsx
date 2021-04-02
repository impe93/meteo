import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import styleSheet from './loader.module.css';

const Loader = () => (
  <div className={styleSheet.container}>
    <LoaderSpinner type='Grid' color='#517daa' />
  </div>
);

export { Loader };
