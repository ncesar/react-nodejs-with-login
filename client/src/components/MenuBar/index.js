import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { HomepageContext } from '../../layout/Homepage/HomepageContext';
import { useStyles } from './styled';

export const MenuBar = (props) => {
  const { title, ...other } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { places, cep } = useContext(HomepageContext);
  const logOutHandler = () => {
    localStorage.removeItem('authData');
    window.location.href = '/';
  };
  const handleCsvDownload = () => {
    if (places.length <= 0) {
      alert(
        'Você precisa ter pelo menos um local no mapa para baixar o arquivo csv.',
      );
      return false;
    }
    return true;
  };

  return (
    <React.Fragment {...other}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" noWrap>
              {title && title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="Pesquisar locais" />
            </ListItem>
          </Link>
          <CSVLink
            data={places}
            target="_blank"
            filename={`locais-pegaki-cep-${cep}.csv`}
            className={classes.link}
            onClick={handleCsvDownload}
          >
            <ListItem button>
              <ListItemIcon>
                <GetAppIcon />
              </ListItemIcon>
              <ListItemText primary="Exportar locais" />
            </ListItem>
          </CSVLink>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={logOutHandler}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};
