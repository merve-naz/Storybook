/** @type { import('@storybook/react').Preview } */
// Bu satır, TypeScript desteği olan bir projede Storybook yapılandırmasının tipini belirler. 
// Bu, editörde otomatik tamamlama ve hata denetimi sağlar. Burada Storybook'un `Preview` tipinin kullanılacağı belirtilmiş.

import { MantineProvider } from '@mantine/core';
const preview = {
  parameters: {
    // "parameters" anahtarı, Storybook'taki tüm hikayelere (stories) uygulanan genel ayarları içerir.
    controls: {
      // Kontrol paneli, bileşenlerin `props`larına göre interaktif ayarlar yapmamıza olanak tanır.
      matchers: {
        // "matchers" alt alanı, belirli `props` adlarına göre hangi tür kontrol araçlarının kullanılacağını tanımlar.

        color: /(background|color)$/i,
        // "color" alanı, `background` veya `color` ile biten herhangi bir `prop` için otomatik olarak bir renk seçici (color picker) kontrol sağlar.
        // Örneğin, `backgroundColor` veya `textColor` gibi `props`lar için Storybook Kontrol Panelinde renk seçici gösterilecektir.

        date: /Date$/i,
        // "date" alanı, `Date` ile biten herhangi bir `prop` için otomatik olarak bir tarih seçici (date picker) kontrol sağlar.
        // Örneğin, `startDate`, `endDate` gibi `props`lar için tarih seçici kontrolü sunulacaktır.
      },
    },
  },
  decorators: [
    (Story) => (
      // "decorators" array'i, Storybook'taki tüm hikayelerin belirli bir bileşen veya işlevle sarılmasını sağlar.
      // Burada, her hikaye MantineProvider ile sarılır.
      <MantineProvider  >
        <Story /> {/* Her bir hikayeyi MantineProvider ile sarıyoruz */}
      </MantineProvider>
    ),
  ]
};

export default preview;
// Bu satır, `preview` ayarlarını dışa aktarıyor. Böylece Storybook bu ayarları kullanarak tüm hikayelere uygulayabilir.
