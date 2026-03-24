'use strict';

const basicScenario = {
  url: 'http://localhost:3000', // або шлях до твоєї локальної сторінки
  delay: 0,
  selectors: ['body'],
  selectorExpansion: true,
  misMatchThreshold: 0.1,
  requireSameDimensions: true,
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
    {
      ...basicScenario,
      label: 'Header tag',
      selectors: ['header'],
    },
    {
      ...basicScenario,
      label: 'Nav tag',
      selectors: ['nav'],
    },
    {
      ...basicScenario,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      misMatchThreshold: 2,
    },
    {
      ...basicScenario,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
      misMatchThreshold: 2,
    },
  ],
};
