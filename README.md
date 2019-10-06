# react-gpt-manager
A barebones React component for Dfp ads

## Usage

```javascript
import { DfpAdItem, displayAd } from 'react-gpt-manager';
.....
<DfpAdItem
  adUnitPath="/6355419/Travel/Europe/France/Paris"
  size={[300, 250]}
  elementId="banner1"
/>
....

setTimeout(() => {
  displayAd();
}, 3000);

```

## Example

https://codesandbox.io/s/cocky-pascal-e2zuf
