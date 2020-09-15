import React from 'react';
import { useStyles } from './styled';
import { MenuBar } from '../MenuBar';

export const Content = (props) => {
  const { children, title, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...other}>
      <MenuBar title={title} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
