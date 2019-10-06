import { DfpAdItem, displayAd } from '../src/index';
import ReactDOM from 'react-dom';
import React from 'react';
const wrapper = document.getElementById('container');
wrapper
  ? ReactDOM.render(
      <div>
        <DfpAdItem
          adUnitPath="/6355419/Travel/Europe/France/Paris"
          size={[300, 250]}
          elementId="banner1"
        />
        <DfpAdItem
          adUnitPath="/6355419/Travel/Europe/France/Paris"
          size={[300, 250]}
          elementId="banner2"
        />
      </div>,
      wrapper,
    )
  : false;
setTimeout(() => {
  displayAd();
}, 3000);
