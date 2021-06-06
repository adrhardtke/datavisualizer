import React from 'react'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const MyNavBar = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
        <AppBar position="static" color="transparent" style={{boxShadow: 'none'}}>
            <Toolbar>               
                <Typography variant="h6" className={classes.title}>
                    DataVisualizer
                </Typography>
                <Link href="https://github.com/adrhardtke/datavisualizer" target="_blank" rel="noreferrer">
                  <Button color="inherit">View on Github</Button><GithubIcon size="20" />
                </Link>
            </Toolbar>
        </AppBar>
        </div>
    )

}

export default MyNavBar