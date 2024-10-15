
import { fn } from '@storybook/test';
import { Button } from './Button';
// default export kısmı 
export default {
  title: 'Example/Button', // Bileşenin Storybook'taki başlığı
  component: Button, // Bu hikayenin hangi bileşene ait olduğunu belirtir.
  parameters: {// Storybook'ta hikayenin nasıl görüneceğini belirleyen ek parametreler
    layout: 'centered',
  },

  tags: ['autodocs'],//hikaye dosyasına ek açıklamalar ya da etiketler eklemek için kullanılır( Bu etiket otomatik dokümantasyonun aktif olduğunu belirtir.)
  
  argTypes: {//hikayelerde hangi argümanların (args) nasıl kontrol edileceğini belirtir.
    //Bu, Storybook'taki kontrol panelinde (controls panel) bir renk seçici (color picker) gösterileceği anlamına gelir. 
    //Kullanıcı, Storybook arayüzünde arka plan rengini değiştirebilir.
    backgroundColor: { control: 'color' }, 
  },
  args: {//bileşene varsayılan olarak geçilecek  (props) tanımlar.
    onClick: fn()//fn(), bir fonksiyonun yer tutucu (placeholder) değeridir. Bu sayede bileşenin tıklama işlevselliği test edilebilir.
    },
};
//  export const Primary,Secondary,Large,Small bunların hepsi  bileşenin belirli bir varyasyonunu gösterir. 
//Bu yuzden herbirine o bileşene ait bir hikaye adı verilir.Aynı zamanda Adlandırılmış exportlar olarak  da adlandırılır.
//args: Bileşene hangi props'ların (veya args'ların) geçileceğini belirler
// her bir hikaye de argüman türleri (args) birbirinden farklı olabilir. 
export const Third = {//ad cakısmasını onelmek ıcın yaptım.
  args: {
    primary: true,
    label: 'Button',
  },
};
// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
