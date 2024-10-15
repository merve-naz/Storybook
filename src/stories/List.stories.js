
import { ListComponent } from './List';

export default {
  title: 'Example/ListComponent', // Storybook'ta nasıl görüneceği
  component: ListComponent,
  argTypes: {
    items: {
      control: 'array', // Kontrol panelinden items'ın bir dizi olarak ayarlanmasını sağlar
    },
  },
};

// Boş bir liste durumu
export const Empty = {
  render: (args) => <ListComponent {...args} />,
  args: {
    items: [], // Boş liste
  },
};

// Tek bir öğeyle liste
export const OneItem = {
  render: (args) => <ListComponent {...args} />,
  args: {
    items: ['Item 1'], // Bir öğe içeren liste
  },
};

// Birden fazla öğeyle liste
export const ManyItems = {
  render: (args) => <ListComponent {...args} />,
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'], // Birden fazla öğe içeren liste
  },
};
