import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import Field from '../imports/ui/field.jsx';
 
Meteor.startup(() => {
  render(<Field width={12} />, document.getElementById('render-target'));
});
