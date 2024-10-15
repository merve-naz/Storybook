/** @type { import('@storybook/react-webpack5').StorybookConfig } */
// Yukarıdaki yorum satırı, TypeScript desteği olan bir proje için Storybook yapılandırmasının tipini belirtir. 
//Bu, editörde otomatik tamamlama ve hata denetimi sağlar.

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // - "../src/**/*.mdx": `src` klasöründeki `.mdx` uzantılı dosyaları içerir. Bu dosyalar genellikle Markdown ile birlikte hikayeler içerir.
  // - "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)": `src` klasöründeki `.stories` dosya uzantısına sahip dosyaları içerir.
  //    Bu, `.stories.js`, `.stories.tsx` vb. uzantılara sahip dosyaları bulup yükleyecek anlamına gelir.

  addons: [
    "@storybook/preset-create-react-app",
    // Create React App ile uyumlu bir Storybook yapılandırmasını sağlar.
    "@storybook/addon-onboarding",
    // yeni kullanıcıların Storybook'a kolayca alışmasını sağlayan rehberler sunar.
    "@storybook/addon-links",
    // bileşenler arasında bağlantılar oluşturmanıza olanak tanır. Örneğin, bir bileşenden diğerine bağlantı kurabilirsiniz.
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // kullanıcı etkileşimlerini simüle ederek bileşenlerinizin etkileşim testlerini yapmanıza olanak tanır.
  ],


  framework: {
    name: "@storybook/react-webpack5",
    //Burada React ve Webpack 5 kullanılıyor.
    options: {},
    // Ek ayarlar gerekirse `options` içinde belirtilir. Şu an için boş bırakılmış.
  },

  // `staticDirs`, Storybook'un kullanabileceği statik dosyaların bulunduğu dizinleri belirtir.
  staticDirs: ["..\\public"],

};

export default config;
// Son olarak, yapılandırma ayarlarını dışa aktarıyoruz. Bu, Storybook'un bu dosyayı kullanarak başlatılmasını sağlar.
