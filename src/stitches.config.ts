// stitches.config.ts
import { createStyled } from '@stitches/react';
export * from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $text: 'hsl(0,0,13,1)',
      $textSecondary: 'hsl(0,0,47,1)',
      $textPlaceholder: 'hsl(0,0,73,1)',
      $bgDark: 'hsl(0,0,30,1)',
      $bgLight: 'hsl(0,0,87,1)',
      $bgLightest: 'hsl(0,0,95,1)',
      $white: 'hsl(0,0,100,1)',
      $corpMain: 'hsl(254,100,50,1)',
      $corpSecondary: 'hsl(43,100,53,1)',
      $corpTerciary: 'hsl(328,83,48,1)',
      $feedbackRed: 'hsl(355,69,51,1)',
      $feedbackGreen: 'hsl(96,93,30,1)',
      $feedbackYellow: 'hsl(37,83,52,1)',
      $hoverMention: 'hsl(229,100,50,0.12)',
      $hoverTransclusion: 'hsl(43,100,53,0.15)',
      $hoverOuterLink: 'hsl(0,0,80,0.6)',
      $hoverBlock: 'hsl(0,0,80,0.2)',
    },
    fonts: {
      $headings: 'Basier, apple-system, sans-serif',
      $paragraphs: 'Lora, serif',
      $ui: 'Basier, apple-system, sans-serif'
    }
    fontSizes: {
      $1: '12px',
      $2: '14px',
      $3: '16px',
      $4: '20px',
      $5: '24px',
      $6: '32px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints: {
    bp1: (rule) => `@media (min-width: 640px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 768px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    bp4: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {},
});
