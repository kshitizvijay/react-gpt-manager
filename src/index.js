import React from 'react';

function addtoList(adUnitPath, size, elementId) {
  window.react_gpt_ads_list = Array.isArray(window.react_gpt_ads_list)
    ? window.react_gpt_ads_list
    : [];
  window.react_gpt_ads_list.push({
    adUnitPath,
    size,
    elementId,
  });
}
function getList() {
  return window.react_gpt_ads_list;
}
function emptyList() {
  window.react_gpt_ads_list = [];
}
export function displayAd(list) {
  const react_gpt_ads_list = Array.isArray(list) ? list : getList();
  if (!Array.isArray(react_gpt_ads_list)) {
    return;
  }
  const react_gpt_ads_list_clone = [...react_gpt_ads_list];
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];
  const { googletag } = window;
  googletag.cmd.push(() => {
    react_gpt_ads_list_clone.forEach(adItem => {
      const { adUnitPath, size, elementId } = adItem;
      const adCodeObj = googletag.defineSlot(adUnitPath, size, elementId);
      adCodeObj.addService(googletag.pubads());
    });

    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableAsyncRendering();
    googletag.pubads().collapseEmptyDivs(true);
    googletag.enableServices();
    react_gpt_ads_list_clone.forEach(adItem => {
      googletag.display(adItem.elementId);
    });
  });
  emptyList();
}

export class DfpAdItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { adUnitPath, size, elementId } = this.props;
    addtoList(adUnitPath, size, elementId);
  }
  render() {
    const { adUnitPath, size, elementId } = this.props;
    return <div id={elementId}></div>;
  }
}
