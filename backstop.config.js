'use strict';

const { basicScenario } = require('@mate-academy/backstop-config');

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/moyo-header/',
};

module.exports = {
  id: 'moyo-header',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    { ...basic, label: 'Header tag', selectors: ['header'] },
    { ...basic, label: 'Nav tag', selectors: ['nav'] },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      misMatchThreshold: 2,
    },
    {
      ...basic,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
      misMatchThreshold: 2,
    },
  ],
};
