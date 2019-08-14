import React from 'react';
import MicroCardMaker from './MicroCardMaker.js'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // maxWidth: ,
    backgroundColor: theme.palette.background.paper,
  },
  Tab: {
    flexGrow: 1,
    width: '100%'
  }
}));

export default function MicroCardContainer({ eventsToday, eventsTomorrow, eventsTomorrowPlusPlus }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (

    <Grid item xs={4}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          centered
        >
          <Tab label='Today' />
          <Tab label='Tomorrow' />
          <Tab label='Overmorrow' />
        </Tabs>
      </Paper>

      <List className={classes.root}>
        {
          eventsToday.map( event => <MicroCardMaker key={event.name} event={event} />)
        }
      </List>
    </Grid>
  );
}