import React from 'react';
import Preference from './Preference';
import { List } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%'
  }
}));

export default function PreferencesContainer({ categories, userPreferences }) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root}>
        {categories
          .filter(cat => cat !== 'undefined')
          .map(cat => (
            <Preference
              cat={cat}
              userPreference={userPreferences.filter(
                pref => pref['name'] === cat
              )}
            />
          ))}
      </List>
    </>
  );
}
