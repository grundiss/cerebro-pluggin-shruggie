'use strict';

import getPreview from './shruggie.jsx';

const plugin = ({term, display, actions}) => {
  if(term === 'shruggy' || term === 'shruggie') {
    display({
      title: 'Shruggy face',
      getPreview: getPreview(actions.copyToClipboard)
    });
  }
};

module.exports = {
  fn: plugin
}
