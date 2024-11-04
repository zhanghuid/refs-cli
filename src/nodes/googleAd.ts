import { type Options } from '../utils/utils.js';
import { Element } from 'hast';

// 将 gtagScript 和 inlineScript 放入根节点中
export const googleAd = (options: Options): Element => {
  return [
    {
      type: 'element',
      tagName: 'script',
      properties: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-58H695HZSD' },
      children: [],
    },
    {
      type: 'element',
      tagName: 'script',
      properties: {},
      children: [
        {
          type: 'text',
          value: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-58H695HZSD');
      `,
        },
      ],
    },
  ];
};
